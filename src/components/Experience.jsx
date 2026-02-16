import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Experience.css";

const experienceSection = {
  title: "Experience",
  subtitle:
    "Professional journey across accounting, compliance, reporting, and client service.",
};

const experiences = [
  {
    id: 1,
    role: "General Accountant",
    company: "Majny Packaging Company",
    employmentType: "Full-time",
    period: "Mar 2025 - Present",
    location: "",
    points: [
      "Managed and verified daily financial transactions (journal entries and postings) ensuring accuracy in the general ledger.",
      "Oversaw petty cash settlements and reconciliations, maintaining strict adherence to documentation standards.",
      "Coordinated and processed accurate monthly payroll sheets, ensuring timely and compliant salary disbursement.",
      "Conducted daily reconciliation of branch accounts, including sales and cash transactions, to ensure financial transparency.",
      "Produced weekly performance reports for accounts receivable and accounts payable, supporting management decision-making.",
      "Executed accurate and timely bank reconciliations and proactively resolved all identified balance discrepancies.",
      "Supported month-end closing procedures and managed A/R and A/P functions efficiently to meet reporting deadlines.",
    ],
    skillsNote:
      "Journal Entries, Trial Balance, and related accounting skills.",
  },
  {
    id: 2,
    role: "General Accountant",
    company: "Smart Accounting",
    employmentType: "Full-time",
    period: "Nov 2022 - Mar 2025",
    location: "Kobri Elkobba | On-site",
    points: [
      "Generated accurate monthly and annual financial statements (Income Statements and Balance Sheets) for a diverse client portfolio with compliance to IFRS and local standards.",
      "Oversaw and validated the issuance of electronic tax invoices, ensuring adherence to Egyptian Tax Authority (ETA) e-invoicing requirements.",
      "Conducted detailed monthly account reconciliations and balance analysis to ensure data integrity and reliable trial balance preparation.",
    ],
    skillsNote:
      "Accounting, Group Accounts, and advanced reporting practices.",
  },
  {
    id: 3,
    role: "Freelance Accountant",
    company: "Mostaql.com | Freelance",
    employmentType: "Freelance",
    period: "Jul 2021 - Nov 2022",
    location: "Cairo, Egypt | Remote",
    points: [
      "Designed and implemented automated financial models and Excel dashboards for budgeting, planning, and data analysis to improve reporting accuracy and efficiency.",
      "Authored and delivered impactful PowerPoint presentations and research articles for business meetings and stakeholder communication.",
    ],
    skillsNote:
      "Microsoft Office, Microsoft Excel, and analytical communication skills.",
  },
  {
    id: 4,
    role: "Customer Service Representative",
    company: "Vodafone",
    employmentType: "Part-time",
    period: "Nov 2019 - Jul 2021",
    location: "New Cairo, Egypt | On-site",
    points: [
      "Delivered efficient customer support by resolving inquiries across phone, chat, and email with high customer satisfaction.",
      "Contributed to process improvements by reporting recurring customer issues, improving service quality and reducing repeat calls.",
    ],
    skillsNote:
      "Public Speaking, English Communication, and customer problem-solving.",
  },
];

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">
            {experienceSection.title}
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            {experienceSection.subtitle}
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              key={item.id}
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 90}>
              <div className="experience-step">{String(index + 1).padStart(2, "0")}</div>
              <div className="experience-head">
                <h3>{item.role}</h3>
                <span className="experience-type">{item.employmentType}</span>
              </div>
              <p className="experience-company">{item.company}</p>
              <p className="experience-meta">
                {item.period} {item.location ? `| ${item.location}` : ""}
              </p>

              <ul className="experience-points">
                {item.points.map((point, pointIndex) => (
                  <li key={`exp-${item.id}-point-${pointIndex}`}>{point}</li>
                ))}
              </ul>

              {item.skillsNote && <p className="experience-skills">{item.skillsNote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
