import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Skills.css";

const skillsSection = {
  title: "Skills & Expertise",
  subtitle: "Accounting, tax, ERP, audit, analytics, and professional tools.",
};

const skills = [
  {
    id: 1,
    icon: "CM",
    name: "Change Management",
    description:
      "Process improvement and controlled change execution across workflows.",
    level: "Advanced",
    source: "Strategic planning",
  },
  {
    id: 2,
    icon: "SP",
    name: "Strategic Planning",
    description:
      "Planning priorities and aligning finance actions with business goals.",
    level: "Advanced",
    source: "Strategic planning",
  },
  {
    id: 3,
    icon: "EX",
    name: "Excel Track (Accounting Excel)",
    description:
      "Advanced Excel workflows for reports, analysis, and reconciliation.",
    level: "Expert",
    source: "Excel track (accounting excel)",
  },
  {
    id: 4,
    icon: "PQ",
    name: "Power Query",
    description:
      "Data cleaning, transformation, and automation for reporting pipelines.",
    level: "Advanced",
    source: "Microsoft Office",
  },
  {
    id: 5,
    icon: "PV",
    name: "Pivot Tables",
    description:
      "Fast analysis of large accounting datasets and KPI summaries.",
    level: "Advanced",
    source: "Microsoft Office",
  },
  {
    id: 6,
    icon: "MO",
    name: "Microsoft Office & ICDL",
    description:
      "Professional use of Microsoft Office applications in accounting workflows.",
    level: "Advanced",
    source: "Al-Azhar University",
  },
  {
    id: 7,
    icon: "EA",
    name: "Electronic Accounting",
    description:
      "Applied electronic accounting processes and digital finance workflows.",
    level: "Advanced",
    source: "Al-Azhar University",
  },
  {
    id: 8,
    icon: "LI",
    name: "LinkedIn Skill Assessment",
    description: "Passed LinkedIn Skill Assessment validation.",
    level: "Verified",
    source: "LinkedIn",
  },
  {
    id: 9,
    icon: "DM",
    name: "Digital Marketing",
    description:
      "Online campaign support, planning, and performance-focused execution.",
    level: "Advanced",
    source: "Digital marketing",
  },
  {
    id: 10,
    icon: "EM",
    name: "Email Marketing",
    description: "Audience-focused email campaigns and communication planning.",
    level: "Advanced",
    source: "Digital marketing",
  },
  {
    id: 11,
    icon: "SE",
    name: "Search Engine Optimization (SEO)",
    description:
      "SEO basics for visibility, ranking improvement, and organic reach.",
    level: "Intermediate",
    source: "Freelance at Mostaql.com",
  },
  {
    id: 12,
    icon: "BC",
    name: "Commercial Banking Services",
    description:
      "Hands-on understanding from summer training in banking operations.",
    level: "Intermediate",
    source: "Summer training at Banque Misr",
  },
  {
    id: 13,
    icon: "BO",
    name: "Banking Operations",
    description:
      "Knowledge of branch operation flow and banking process structure.",
    level: "Intermediate",
    source: "Summer training at Banque Misr",
  },
  {
    id: 14,
    icon: "FA",
    name: "Financial Statement Auditing",
    description:
      "Audit-focused review of statements for compliance and accuracy.",
    level: "Advanced",
    source: "Audit financial statements",
  },
  {
    id: 15,
    icon: "AU",
    name: "Auditing",
    description:
      "Risk-aware audit support with attention to evidence and controls.",
    level: "Advanced",
    source: "Freelance at Mostaql.com",
  },
  {
    id: 16,
    icon: "GR",
    name: "Group Accounts",
    description:
      "Support in group account preparation and consolidated reporting context.",
    level: "Advanced",
    source: "Majny Packaging Company",
  },
  {
    id: 17,
    icon: "YE",
    name: "Year-End Accounting",
    description:
      "Year-end adjustments, closing tasks, and final statement readiness.",
    level: "Advanced",
    source: "Majny Packaging Company",
  },
  {
    id: 18,
    icon: "TB",
    name: "Trial Balance & Balance Sheets",
    description:
      "Accurate trial balance preparation and balance sheet validation.",
    level: "Advanced",
    source: "Majny Packaging Company",
  },
  {
    id: 19,
    icon: "JE",
    name: "Journal Entries (Accounting)",
    description:
      "Daily posting discipline and verification across account cycles.",
    level: "Advanced",
    source: "Majny Packaging Company",
  },
  {
    id: 20,
    icon: "TX",
    name: "Income Tax & Tax Accounting",
    description: "Tax calculations, compliance checks, and filing readiness.",
    level: "Advanced",
    source: "Accounting practice",
  },
  {
    id: 21,
    icon: "BR",
    name: "Bank Reconciliation",
    description:
      "Timely reconciliations and discrepancy resolution for clean balances.",
    level: "Advanced",
    source: "General Accountant at Majny Packaging Company",
  },
  {
    id: 22,
    icon: "BA",
    name: "Business Analysis",
    description:
      "Analytical interpretation of data to support business decisions.",
    level: "Advanced",
    source: "Al-Azhar University",
  },
  {
    id: 23,
    icon: "FC",
    name: "Financial Accounting",
    description:
      "Core financial accounting principles and practical implementation.",
    level: "Advanced",
    source: "Al-Azhar University",
  },
  {
    id: 24,
    icon: "EC",
    name: "E-Commerce",
    description:
      "Freelance support for online business tasks and digital operations.",
    level: "Intermediate",
    source: "Freelance at Mostaql.com",
  },
  {
    id: 25,
    icon: "PS",
    name: "Presentation Skills",
    description:
      "Business-focused presentations with clear structure and messaging.",
    level: "Advanced",
    source: "Al-Azhar University",
  },
  {
    id: 26,
    icon: "PW",
    name: "Public Speaking",
    description:
      "Effective communication in client support and team coordination.",
    level: "Advanced",
    source: "Customer Service Representative at Vodafone",
  },
  {
    id: 27,
    icon: "SC",
    name: "Strategic Communications",
    description:
      "Clear communication planning for stakeholders and operations.",
    level: "Advanced",
    source: "Customer Service Representative at Vodafone",
  },
  {
    id: 28,
    icon: "LD",
    name: "Leadership & Teamwork",
    description:
      "Ownership, collaboration, and organization in multi-task environments.",
    level: "Advanced",
    source: "Vodafone + Al-Azhar University",
  },
  {
    id: 29,
    icon: "EN",
    name: "English Communication",
    description:
      "Strong written and verbal communication for professional contexts.",
    level: "Advanced",
    source: "Al-Azhar University",
  },
  {
    id: 30,
    icon: "DT",
    name: "Data Entry & Back Office Operations",
    description:
      "Structured data handling and process discipline in operational tasks.",
    level: "Advanced",
    source: "Freelance at Mostaql.com",
  },
  {
    id: 31,
    icon: "ER",
    name: "ERP Implementations",
    description:
      "Applied ERP usage in accounting cycles with practical system discipline.",
    level: "Advanced",
    source: "Focus ERP, Al-Mohtaseb",
  },
  {
    id: 32,
    icon: "MW",
    name: "Microsoft Word & PowerPoint",
    description:
      "Professional reporting documents and structured presentation delivery.",
    level: "Advanced",
    source: "Microsoft Office",
  },
  {
    id: 33,
    icon: "OA",
    name: "Outlook & Access",
    description:
      "Office communication management and basic data organization workflows.",
    level: "Intermediate",
    source: "Al-Azhar University",
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="section-title" data-aos="fade-up">
            {skillsSection.title}
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100">
            {skillsSection.subtitle}
          </p>
        </div>

        <div className="skills-stage" data-aos="zoom-in-up">
          <div className="skills-marquee">
            <div className="skills-track">
              {skills.map((skill) => (
                <span className="skill-pill" key={`pill-a-${skill.id}`}>
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="skills-track" aria-hidden="true">
              {skills.map((skill) => (
                <span className="skill-pill" key={`pill-b-${skill.id}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                key={skill.id}
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay={index * 45}>
                <div className="skill-glow"></div>
                <div className="skill-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                {skill.source && (
                  <span className="skill-source">{skill.source}</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
