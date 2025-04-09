"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import StaggerChildren from "@/components/stagger-children"
import ProjectModal from "./project-modal"

// Project data
const projects = [
  {
    id: 1,
    title: "Intelligent Research Archive",
    image: "/images/llm-brain.png",
    description: "A multi-agent research system with RAG capabilities for document analysis",
    fullDescription: [
      "Devised a client-facing Q/A interface application using FastAPI and Streamlit leveraging multi-agent research system with multi-modal RAG using LangChain integrated with OpenAI GPT-4 LLM for interactive document exploration and on-the-fly summaries.",
      "Implemented an Airflow pipeline to scrape, ingest, and manage research publications using Selenium, storing structured and unstructured data in Snowflake and S3, achieving seamless data retrieval and storage.",
      "Parsed PDFs to extract various content formats (text, images, tables) using PyPDF2, PyMuPDF, and Docling; generated vector embeddings using NVIDIA and SentenceTransformers, and stored them in Pinecone for similarity search.",
      "Containerized all components using Docker, integrating them into a unified Docker Compose setup.",
    ],
    date: "September 2024",
  },
  {
    id: 2,
    title: "Iowa Liquor Sales BI Report",
    image: "/images/etl-process.png",
    description: "ETL pipeline and interactive dashboards for liquor sales analysis",
    fullDescription: [
      "Designed a Kimball's dimensional data model in E/R Studio; implemented data profiling workflows in Alteryx and staged the data in Azure Data Lake using Azure Data Factory (ADF).",
      "Executed ADF, Talend, and Snowflake integrated ETL pipeline, processing 30M+ records from parquet format into Snowflake.",
      "Devised interactive Power BI and Tableau dashboards to analyze liquor sales data by year, city, and product categories.",
    ],
    date: "August 2024",
  },
  {
    id: 3,
    title: "Global GHG Emissions Analysis",
    image: "/images/data-analysis.png",
    description: "Predictive modeling and trend analysis of greenhouse gas emissions",
    fullDescription: [
      "Led an in-depth categorical trend analysis of global GHG emissions, including comprehensive data preprocessing, exploratory data analysis, and predictive analysis.",
      "Built and validated a linear regression model with feature engineering and RFE for forecasting GHG emissions, optimized with cross-validation and evaluated using R-squared and MAE.",
      "Composed a storyboard with detailed visualizations highlighting geographic trends and predictive insights.",
    ],
    date: "April 2024",
  },
  {
    id: 4,
    title: "Kansas City 311 Call Services BI Report",
    image: "/images/power-bi-dashboard.png",
    description: "Interactive dashboards and data pipelines for city service request analysis",
    fullDescription: [
      "Modeled a star schema in Azure Data Studio to capture trends in 311 service requests by department, request type, and resolution time.",
      "Built and published 12+ interactive Power BI dashboards highlighting request sources, ZIP-code-level workload, and seasonal service spikes.",
      "Engineered data pipelines in Power Query to transform TSV-based city service data into analytical-ready format.",
      "Enabled performance benchmarking by creating metrics for departmental efficiency, average time to close requests, and status composition.",
    ],
    date: "July 2024",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <>
      <section id="projects" className="section bg-[#36454F] text-[#FFFFFA] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="heading-lg mb-16 title-font uppercase-spaced">PROJECTS</h2>
          </FadeIn>

          <StaggerChildren staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card cursor-pointer bg-[#101314] text-[#FFFFFA] shadow-md hover:shadow-lg transition-all"
                onClick={() => setSelectedProject(project.id)}
                data-cursor-hover
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="project-image w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2 title-font">{project.title}</h3>
                  <p className="text-sm opacity-70 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm font-light title-font">
                    VIEW PROJECT <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ProjectModal
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </>
  )
}
