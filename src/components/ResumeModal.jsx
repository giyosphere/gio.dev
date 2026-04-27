import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex flex-col justify-end"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-bg rounded-t-3xl overflow-hidden flex flex-col"
        style={{ height: "94dvh" }}
      >
        {/* Top bar */}
        <div className="shrink-0 flex justify-between items-center px-6 md:px-10 py-4 border-b border-border">
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Resume · Geomar Dalaoyan</span>
          <div className="flex items-center gap-3">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open full resume"
              className="text-muted hover:text-text transition-colors p-1"
            >
              <ExternalLink size={15} />
            </a>
            <button onClick={onClose} aria-label="Close" className="text-muted hover:text-text transition-colors p-1">
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-14">

            {/* Header */}
            <div className="mb-10 pb-8 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent mb-3">Curriculum Vitae</p>
              <h1 className="font-display text-5xl md:text-7xl text-text leading-none tracking-tight mb-3">
                Geomar<br />
                <span className="italic text-muted">Dalaoyan</span>
              </h1>
              <p className="font-body text-sm text-muted mt-4">
                Data Entry Specialist · MERN Stack Developer · IT Professional
              </p>
              <div className="flex flex-wrap gap-4 mt-5">
                <a href="tel:09054495498" className="flex items-center gap-2 font-mono text-xs text-muted hover:text-text transition-colors">
                  <Phone size={12} /> 0905-449-5498
                </a>
                <a href="mailto:giodalaoyan@gmail.com" className="flex items-center gap-2 font-mono text-xs text-muted hover:text-text transition-colors">
                  <Mail size={12} /> giodalaoyan@gmail.com
                </a>
                <span className="flex items-center gap-2 font-mono text-xs text-muted">
                  <MapPin size={12} /> Brookes Point, Palawan
                </span>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-10">
              <SectionTitle>Career Objective</SectionTitle>
              <p className="font-body text-sm text-muted leading-relaxed border-l-2 border-accent pl-4">
                A results-driven IT professional and Data Entry Specialist with hands-on experience managing hospital patient records, encoding large-scale procurement datasets, and building full-stack web applications. I bring speed, precision, and a deep understanding of data systems — backed by a strong IT background and a portfolio of real-world data management projects.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <SectionTitle>Work Experience</SectionTitle>
              <div className="flex flex-col gap-8">
                <ExperienceItem
                  role="Data Controller I"
                  org="Southern Palawan Provincial Hospital"
                  date="July 2023 – December 2024"
                  bullets={[
                    "Encoded, managed, and maintained large volumes of patient records and medical data with high accuracy and confidentiality compliance.",
                    "Systematically organized and updated hospital databases, ensuring data integrity and real-time availability for medical staff.",
                    "Prepared detailed data reports and summaries for department heads using spreadsheet tools.",
                    "Performed quality auditing of encoded records, reducing data errors by consistently applying validation protocols.",
                  ]}
                />
                <ExperienceItem
                  role="Instructor I — Information Technology"
                  org="Palawan State University"
                  date="September 2019 – December 2022"
                  bullets={[
                    "Taught IT subjects including database management, web development, and computer fundamentals to college students.",
                    "Maintained academic records, student grade databases, and enrollment data using spreadsheet systems.",
                    "Designed and managed course databases, digital learning materials, and faculty documentation.",
                    "Mentored students in practical data management and encoding projects aligned with industry standards.",
                  ]}
                />
                <ExperienceItem
                  role="Account Specialist"
                  org="Du ek sam"
                  date="July 2018 – July 2019"
                  bullets={[
                    "Managed client accounts and encoded transactional data with strict attention to accuracy and deadlines.",
                    "Maintained organized records of account activities, billing information, and client correspondence.",
                    "Generated regular reports and reconciliation summaries for management review.",
                  ]}
                />
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <SectionTitle>Data Entry Skills</SectionTitle>
                <SkillGroup label="Spreadsheet & Database" tags={["MS Excel (Advanced)", "Google Sheets", "VLOOKUP / SUMIF", "Pivot Tables", "Dashboard Design", "Data Visualization"]} accent />
                <SkillGroup label="Records Management" tags={["Inventory Control", "Procurement Records", "Hotel PMS Data", "AP/AR Tracking", "Supplier Database", "GR / PO Encoding"]} />
                <SkillGroup label="Quality & Accuracy" tags={["Data Validation", "Error Detection", "High-Speed Encoding", "Document Filing"]} />
              </div>
              <div>
                <SectionTitle>Tech Stack</SectionTitle>
                <SkillGroup label="MERN Stack" tags={["MongoDB", "Express.js", "React.js", "Node.js"]} accent />
                <SkillGroup label="Frontend & Tools" tags={["HTML5 / CSS3", "JavaScript ES6+", "Tailwind CSS", "Bootstrap", "Flutter", "PHP / Laravel", "WordPress", "Git / GitHub", "MySQL", "REST API"]} />
              </div>
            </div>

            {/* Projects */}
            <div className="mb-10">
              <SectionTitle>Portfolio Projects</SectionTitle>
              <div className="flex flex-col gap-3">
                <ProjectRow title="TechMart Inventory Database" desc="50 SKUs, auto-status tracking, revenue dashboard — Excel" />
                <ProjectRow title="Maruyog Ridge Hotel System" desc="31 rooms, 80 bookings, housekeeping log, revenue analytics — 2025–2026" />
                <ProjectRow title="PCDC Procurement Database" desc="105 POs, 40 suppliers, AP tracker, supplier scorecard — 2024–2026" />
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <SectionTitle>Education</SectionTitle>
              <div className="flex flex-col gap-4">
                <EduItem school="Palawan State University" degree="Bachelor of Science in Information Technology" year="June 2013 – April 2016" />
                <EduItem school="Brooke's Point National High School" degree="Secondary Education" year="June 2008 – April 2012" />
                <EduItem school="Brooke's Point Central School" degree="Primary Education" year="June 2003 – April 2008" />
              </div>
            </div>

            <p className="font-mono text-[10px] text-muted/40 tracking-widest text-center pb-4">
              References available upon request · Open to full-time, part-time & remote work
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-xs tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-border" />
    </h2>
  );
}

function ExperienceItem({ role, org, date, bullets }) {
  return (
    <div className="pl-4 border-l border-border">
      <h3 className="font-display text-lg md:text-xl text-text">{role}</h3>
      <p className="font-body text-sm text-accent mt-0.5">{org}</p>
      <p className="font-mono text-[10px] text-muted/60 mt-1 mb-3 tracking-wide">{date}</p>
      <ul className="flex flex-col gap-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="font-body text-xs text-muted leading-relaxed flex gap-2">
            <span className="text-accent shrink-0 mt-0.5">›</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ label, tags, accent }) {
  return (
    <div className="mb-4">
      <p className="font-mono text-[9px] text-muted/60 tracking-widest uppercase mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className={`font-mono text-[10px] px-2 py-1 rounded-full border ${
              accent ? "border-accent/40 text-accent bg-accent/5" : "border-border text-muted"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ title, desc }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 py-3 border-b border-border/50">
      <span className="font-body text-sm text-text font-medium flex-1">{title}</span>
      <span className="font-mono text-[10px] text-muted">{desc}</span>
    </div>
  );
}

function EduItem({ school, degree, year }) {
  return (
    <div className="flex items-start gap-4 bg-surface border border-border rounded-xl px-4 py-3">
      <div className="flex-1">
        <p className="font-body text-sm text-text font-medium">{school}</p>
        <p className="font-mono text-[10px] text-muted mt-0.5">{degree}</p>
      </div>
      <span className="font-mono text-[10px] text-accent shrink-0 mt-0.5">{year}</span>
    </div>
  );
}
