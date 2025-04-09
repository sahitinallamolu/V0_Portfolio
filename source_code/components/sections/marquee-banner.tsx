import Marquee from "@/components/marquee"

export default function MarqueeBanner() {
  return (
    <div className="py-8 bg-[#101314] text-[#FFFFFA] overflow-hidden">
      <Marquee speed={40}>
        <div className="text-2xl font-light px-4 title-font uppercase-spaced">
          DATA SCIENCE • MACHINE LEARNING • DATA ENGINEERING • ANALYTICS • VISUALIZATION • AI • DATA SCIENCE • MACHINE
          LEARNING • DATA ENGINEERING • ANALYTICS • VISUALIZATION • AI •
        </div>
      </Marquee>
    </div>
  )
}
