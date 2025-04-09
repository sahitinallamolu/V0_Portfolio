import FadeIn from "@/components/fade-in"
import StaggerChildren from "@/components/stagger-children"

export default function Experience() {
  return (
    <section id="experience" className="section bg-[#101314] text-[#FFFFFA]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="heading-lg mb-16 title-font uppercase-spaced">EXPERIENCE</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={200}>
            <div>
              <h3 className="text-xl md:text-2xl font-light mb-6 title-font">Accenture</h3>
              <StaggerChildren staggerDelay={150} className="space-y-12">
                <div>
                  <div className="mb-2 flex justify-between flex-wrap">
                    <h4 className="font-light title-font">Data Engineering Analyst</h4>
                    <span className="text-sm opacity-70">Dec 2022 – Aug 2023</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>Migrated 1000+ CSV/XML/JSON files from SAP ERP and SFTP systems to Google Cloud Storage</li>
                    <li>Developed stored procedures using Google BigQuery reducing runtime by 55%</li>
                    <li>Fine-tuned retail supply chain data models improving traceability by 50%</li>
                    <li>Designed and scheduled 35 ETL workflows using Airflow DAGs</li>
                    <li>Built 20+ Power BI dashboards with advanced DAX queries</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex justify-between flex-wrap">
                    <h4 className="font-light title-font">Data Engineering Associate</h4>
                    <span className="text-sm opacity-70">Oct 2021 – Nov 2022</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>Engineered ETL pipelines using S3, AWS Glue, Athena, reducing processing time by 45%</li>
                    <li>Optimized PySpark scripts in Databricks boosting ingestion speed by 33%</li>
                    <li>Achieved 30% reduction in query execution time in AWS Redshift and Google BigQuery</li>
                    <li>Refined SQL queries for SIT and UAT Testing on BigQuery tables</li>
                    <li>Presented end-to-end workflow and created Tableau dashboards for KPIs</li>
                  </ul>
                </div>
              </StaggerChildren>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="space-y-8">
              <h3 className="text-xl font-light title-font">Skills</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <StaggerChildren staggerDelay={100}>
                  <div className="border border-[#FFFFFA]/20 p-3">Python</div>
                  <div className="border border-[#FFFFFA]/20 p-3">SQL</div>
                  <div className="border border-[#FFFFFA]/20 p-3">AWS</div>
                  <div className="border border-[#FFFFFA]/20 p-3">Google Cloud</div>
                  <div className="border border-[#FFFFFA]/20 p-3">Airflow</div>
                  <div className="border border-[#FFFFFA]/20 p-3">PySpark</div>
                  <div className="border border-[#FFFFFA]/20 p-3">Power BI</div>
                  <div className="border border-[#FFFFFA]/20 p-3">Tableau</div>
                  <div className="border border-[#FFFFFA]/20 p-3">ETL/ELT</div>
                  <div className="border border-[#FFFFFA]/20 p-3">Data Modeling</div>
                </StaggerChildren>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
