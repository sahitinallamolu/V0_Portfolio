"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type FormData = z.infer<typeof FormSchema>

export async function submitContactForm(data: FormData) {
  try {
    // Validate form data
    const validatedData = FormSchema.parse(data)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // In production, these would come from environment variables
        user: process.env.EMAIL_USER || "your-email@gmail.com", // Replace with your sending email
        pass: process.env.EMAIL_PASS || "your-app-password", // Use app password for Gmail
      },
    })

    // Compose email
    const mailOptions = {
      from: `"Portfolio Contact" <${validatedData.email}>`,
      to: "nallamolu.s@northeastern.edu",
      subject: `New Contact from ${validatedData.name}`,
      replyTo: validatedData.email,
      text: validatedData.message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <h3 style="color: #555; margin-top: 20px;">Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">${validatedData.message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    }

    // In development environment, log the email instead of sending it
    if (process.env.NODE_ENV === "development") {
      console.log("Email would be sent in production:", mailOptions)
      return { success: true }
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }

    return { success: false, error: "Failed to send your message. Please try again or contact directly via email." }
  }
}
