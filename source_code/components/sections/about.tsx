import FadeIn from "@/components/fade-in"
import StaggerChildren from "@/components/stagger-children"

export default function About() {
  return (
    <section id="about" className="section bg-[#36454F] text-[#FFFFFA]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="heading-lg mb-16 title-font uppercase-spaced">ABOUT ME</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={200}>
            <div>
              <p className="body-text mb-6">
                I'm a graduate student in Information Systems at Northeastern University with a strong foundation in
                data engineering, analytics, and business intelligence. At Accenture, I worked on large-scale data
                integration projects, migrating thousands of files from ERP and SFTP systems to cloud storage,
                optimizing pipelines in AWS and GCP, and automating workflows using Airflow.
              </p>
              <p className="body-text">
                I enjoy building end-to-end data solutions that are both impactful and user-friendly. From creating
                multi-agent research applications with FastAPI and LangChain to developing predictive models for GHG
                emissions and constructing dimensional models for BI reporting, I bring a blend of technical expertise
                and strategic thinking to every project.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-[#101314] p-8 text-[#FFFFFA]">
              <h3 className="text-xl font-light mb-6 title-font">EDUCATION</h3>
              <StaggerChildren staggerDelay={150}>
                <div className="mb-6">
                  <h4 className="font-light title-font">Northeastern University</h4>
                  <p className="text-sm opacity-70">MS in Information Systems</p>
                  <p className="text-sm">2023 - Present</p>
                </div>
                <div>
                  <h4 className="font-light title-font">SRM Institute of Science and Technology</h4>
                  <p className="text-sm opacity-70">B.Tech in Computer Science</p>
                  <p className="text-sm">2017 - 2021</p>
                </div>
              </StaggerChildren>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
