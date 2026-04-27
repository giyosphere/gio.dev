import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Mail, Phone, MapPin, Download } from "lucide-react";

export default function ResumeModal({ onClose }) {

  const handleDownload = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Geomar Dalaoyan — Resume</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
<style>
  @page { size: A4; margin: 7mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 7.5pt;
    line-height: 1.38;
    color: #0d0d0d;
    background: #fff;
  }
  .mono { font-family: 'Space Mono', monospace; }
  .muted { color: #666; }
  .accent { color: #0d0d0d; }
  .border-bottom { border-bottom: 1px solid #ddd; padding-bottom: 5pt; margin-bottom: 5pt; }
  .border-left { border-left: 2px solid #0d0d0d; padding-left: 8pt; }
  .section-divider { display: flex; align-items: center; gap: 8pt; margin-bottom: 5pt; }
  .section-divider span.line { flex: 1; height: 1px; background: #ddd; }
  .section-title { font-family: 'Space Mono', monospace; font-size: 6pt; letter-spacing: 0.2em; text-transform: uppercase; color: #0d0d0d; }

  /* Header */
  .header { display: flex; align-items: flex-start; gap: 14pt; margin-bottom: 5pt; padding-bottom: 5pt; border-bottom: 1px solid #ddd; }
  .header img { width: 58pt; height: 68pt; object-fit: cover; object-position: top; border-radius: 5pt; border: 1px solid #ddd; flex-shrink: 0; }
  .header-info h1 { font-family: 'DM Sans', sans-serif; font-weight: 100; font-size: 26pt; line-height: 1; letter-spacing: 0.02em; text-transform: uppercase; color: #0d0d0d; }
  .header-info h1 span { color: #888; }
  .header-info .cv-label { font-family: 'Space Mono', monospace; font-size: 6pt; letter-spacing: 0.25em; text-transform: uppercase; color: #0d0d0d; margin-bottom: 4pt; }
  .header-info .title { font-size: 7.5pt; color: #666; margin-top: 4pt; }
  .contacts { display: flex; flex-wrap: wrap; gap: 10pt; margin-top: 5pt; }
  .contacts span { font-family: 'Space Mono', monospace; font-size: 6.5pt; color: #666; }

  /* Two column layout */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10pt; margin-bottom: 5pt; }

  /* Section block */
  .section { margin-bottom: 5pt; }

  /* Experience */
  .exp-item { padding-left: 8pt; border-left: 1px solid #ddd; margin-bottom: 4pt; }
  .exp-item:last-child { margin-bottom: 0; }
  .exp-role { font-size: 8.5pt; font-weight: 500; color: #0d0d0d; }
  .exp-org { font-size: 7.5pt; color: #0d0d0d; margin-top: 1pt; }
  .exp-date { font-family: 'Space Mono', monospace; font-size: 6pt; color: #999; margin: 2pt 0 3pt; }
  .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 2pt; }
  .exp-bullets li { font-size: 7pt; color: #555; display: flex; gap: 5pt; line-height: 1.4; }
  .exp-bullets li::before { content: "›"; color: #0d0d0d; flex-shrink: 0; }

  /* Skills */
  .skill-group { margin-bottom: 3.5pt; }
  .skill-label { font-family: 'Space Mono', monospace; font-size: 5.5pt; color: #aaa; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 3pt; }
  .tags { display: flex; flex-wrap: wrap; gap: 2pt; }
  .tag { font-family: 'Space Mono', monospace; font-size: 6pt; padding: 1.5pt 5pt; border-radius: 999pt; border: 1px solid #ddd; color: #555; }
  .tag.accent-tag { border-color: #0d0d0d; color: #0d0d0d; }

  /* Projects */
  .project-row { display: flex; justify-content: space-between; align-items: baseline; padding: 3pt 0; border-bottom: 1px solid #eee; gap: 8pt; }
  .project-row:last-child { border-bottom: none; }
  .project-title { font-size: 7.5pt; font-weight: 500; color: #0d0d0d; }
  .project-desc { font-family: 'Space Mono', monospace; font-size: 6pt; color: #888; flex-shrink: 0; }

  /* Education */
  .edu-item { display: flex; justify-content: space-between; align-items: flex-start; padding: 4pt 6pt; border: 1px solid #e5e5e5; border-radius: 5pt; margin-bottom: 3pt; }
  .edu-item:last-child { margin-bottom: 0; }
  .edu-school { font-size: 7.5pt; font-weight: 500; color: #0d0d0d; }
  .edu-degree { font-family: 'Space Mono', monospace; font-size: 5.8pt; color: #888; margin-top: 1pt; }
  .edu-year { font-family: 'Space Mono', monospace; font-size: 6pt; color: #0d0d0d; flex-shrink: 0; margin-left: 8pt; text-align: right; }

  /* Footer */
  .footer { font-family: 'Space Mono', monospace; font-size: 6pt; color: #bbb; text-align: center; margin-top: 4pt; letter-spacing: 0.15em; }
</style>
</head>
<body>

<!-- Header -->
<div class="header">
  <img src="${window.location.origin}${import.meta.env.BASE_URL}images/Geomar_Photo.jpg" alt="Geomar Dalaoyan"/>
  <div class="header-info">
    <p class="cv-label">Curriculum Vitae</p>
    <h1>Geomar<br/><span>Dalaoyan</span></h1>
    <p class="title">Data Entry Specialist · MERN Stack Developer · IT Professional</p>
    <div class="contacts">
      <span>📞 0905-449-5498</span>
      <span>✉ giodalaoyan@gmail.com</span>
      <span>📍 Brookes Point, Palawan</span>
    </div>
  </div>
</div>

<!-- Objective -->
<div class="section">
  <div class="section-divider"><span class="section-title">Career Objective</span><span class="line"></span></div>
  <p class="border-left muted" style="font-size:7pt;line-height:1.5">
    A results-driven IT professional and Data Entry Specialist with hands-on experience managing hospital patient records, encoding large-scale procurement datasets, and building full-stack web applications. I bring speed, precision, and a deep understanding of data systems — backed by a strong IT background and a portfolio of real-world data management projects.
  </p>
</div>

<!-- Experience -->
<div class="section">
  <div class="section-divider"><span class="section-title">Work Experience</span><span class="line"></span></div>
  <div class="exp-item">
    <p class="exp-role">Data Controller I</p>
    <p class="exp-org">Southern Palawan Provincial Hospital</p>
    <p class="exp-date">July 2023 – December 2024</p>
    <ul class="exp-bullets">
      <li>Encoded, managed, and maintained large volumes of patient records and medical data with high accuracy and confidentiality compliance.</li>
      <li>Systematically organized and updated hospital databases, ensuring data integrity and real-time availability for medical staff.</li>
      <li>Prepared detailed data reports and summaries for department heads using spreadsheet tools.</li>
      <li>Performed quality auditing of encoded records, reducing data errors by consistently applying validation protocols.</li>
    </ul>
  </div>
  <div class="exp-item">
    <p class="exp-role">Instructor I — Information Technology</p>
    <p class="exp-org">Palawan State University</p>
    <p class="exp-date">September 2019 – December 2022</p>
    <ul class="exp-bullets">
      <li>Taught IT subjects including database management, web development, and computer fundamentals to college students.</li>
      <li>Maintained academic records, student grade databases, and enrollment data using spreadsheet systems.</li>
      <li>Designed and managed course databases, digital learning materials, and faculty documentation.</li>
      <li>Mentored students in practical data management and encoding projects aligned with industry standards.</li>
    </ul>
  </div>
  <div class="exp-item">
    <p class="exp-role">Account Specialist</p>
    <p class="exp-org">Du ek sam</p>
    <p class="exp-date">July 2018 – July 2019</p>
    <ul class="exp-bullets">
      <li>Managed client accounts and encoded transactional data with strict attention to accuracy and deadlines.</li>
      <li>Maintained organized records of account activities, billing information, and client correspondence.</li>
      <li>Generated regular reports and reconciliation summaries for management review.</li>
    </ul>
  </div>
</div>

<!-- Skills -->
<div class="two-col">
  <div>
    <div class="section-divider"><span class="section-title">Data Entry Skills</span><span class="line"></span></div>
    <div class="skill-group">
      <p class="skill-label">Spreadsheet &amp; Database</p>
      <div class="tags">
        <span class="tag accent-tag">MS Excel (Advanced)</span><span class="tag accent-tag">Google Sheets</span><span class="tag accent-tag">VLOOKUP / SUMIF</span><span class="tag accent-tag">Pivot Tables</span><span class="tag accent-tag">Dashboard Design</span><span class="tag accent-tag">Data Visualization</span>
      </div>
    </div>
    <div class="skill-group">
      <p class="skill-label">Records Management</p>
      <div class="tags">
        <span class="tag">Inventory Control</span><span class="tag">Procurement Records</span><span class="tag">Hotel PMS Data</span><span class="tag">AP/AR Tracking</span><span class="tag">Supplier Database</span><span class="tag">GR / PO Encoding</span>
      </div>
    </div>
    <div class="skill-group">
      <p class="skill-label">Quality &amp; Accuracy</p>
      <div class="tags">
        <span class="tag">Data Validation</span><span class="tag">Error Detection</span><span class="tag">High-Speed Encoding</span><span class="tag">Document Filing</span>
      </div>
    </div>
  </div>
  <div>
    <div class="section-divider"><span class="section-title">Tech Stack</span><span class="line"></span></div>
    <div class="skill-group">
      <p class="skill-label">MERN Stack</p>
      <div class="tags">
        <span class="tag accent-tag">MongoDB</span><span class="tag accent-tag">Express.js</span><span class="tag accent-tag">React.js</span><span class="tag accent-tag">Node.js</span>
      </div>
    </div>
    <div class="skill-group">
      <p class="skill-label">Frontend</p>
      <div class="tags">
        <span class="tag">HTML5 / CSS3</span><span class="tag">JavaScript ES6+</span><span class="tag">Tailwind CSS</span><span class="tag">Bootstrap</span><span class="tag">Framer Motion</span><span class="tag">React Hooks</span><span class="tag">React Router</span>
      </div>
    </div>
    <div class="skill-group">
      <p class="skill-label">Backend &amp; Database</p>
      <div class="tags">
        <span class="tag">REST API Design</span><span class="tag">JWT Auth</span><span class="tag">Mongoose ODM</span><span class="tag">MySQL</span><span class="tag">Firebase</span>
      </div>
    </div>
    <div class="skill-group">
      <p class="skill-label">Dev Tools</p>
      <div class="tags">
        <span class="tag">Git / GitHub</span><span class="tag">Vite</span><span class="tag">Postman</span><span class="tag">VS Code</span><span class="tag">Vercel</span><span class="tag">PHP / Laravel</span><span class="tag">WordPress</span>
      </div>
    </div>
  </div>
</div>

<!-- Projects -->
<div class="section">
  <div class="section-divider"><span class="section-title">Portfolio Projects</span><span class="line"></span></div>
  <div class="project-row"><span class="project-title">TechMart Inventory Database</span><span class="project-desc">50 SKUs, auto-status tracking, revenue dashboard — Excel</span></div>
  <div class="project-row"><span class="project-title">Maruyog Ridge Hotel System</span><span class="project-desc">31 rooms, 80 bookings, housekeeping log, revenue analytics — 2025–2026</span></div>
  <div class="project-row"><span class="project-title">PCDC Procurement Database</span><span class="project-desc">105 POs, 40 suppliers, AP tracker, supplier scorecard — 2024–2026</span></div>
</div>

<!-- Education -->
<div class="section">
  <div class="section-divider"><span class="section-title">Education</span><span class="line"></span></div>
  <div class="edu-item"><div><p class="edu-school">Palawan State University</p><p class="edu-degree">Bachelor of Science in Information Technology</p></div><span class="edu-year">June 2013 – April 2016</span></div>
  <div class="edu-item"><div><p class="edu-school">Brooke's Point National High School</p><p class="edu-degree">Secondary Education</p></div><span class="edu-year">June 2008 – April 2012</span></div>
  <div class="edu-item"><div><p class="edu-school">Brooke's Point Central School</p><p class="edu-degree">Primary Education</p></div><span class="edu-year">June 2003 – April 2008</span></div>
</div>

<p class="footer">References available upon request · Open to full-time, part-time &amp; remote work</p>

<script>window.onload = () => { window.focus(); window.print(); }<\/script>
</body>
</html>`;

    const win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
  };

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
            <button
              onClick={handleDownload}
              aria-label="Download resume as PDF"
              className="flex items-center gap-1.5 text-muted hover:text-text transition-colors px-3 py-1.5 rounded-full border border-border hover:border-text text-xs font-body"
            >
              <Download size={13} />
              Download PDF
            </button>
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
              <div className="flex items-start gap-6 md:gap-10">
                <img
                  src={`${import.meta.env.BASE_URL}images/Geomar_Photo.jpg`}
                  alt="Geomar Dalaoyan"
                  loading="lazy"
                  className="w-24 h-28 md:w-32 md:h-36 object-cover object-top rounded-xl border border-border shrink-0"
                />
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent mb-3">Curriculum Vitae</p>
                  <h1 className="font-body font-[100] text-5xl md:text-7xl text-text leading-none tracking-[0.02em] uppercase mb-3">
                    Geomar<br />
                    <span className="text-muted">Dalaoyan</span>
                  </h1>
                  <p className="font-body text-sm text-muted mt-4">
                    Data Entry Specialist · MERN Stack Developer · IT Professional
                  </p>
                </div>
              </div>
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
                <SkillGroup label="Frontend" tags={["HTML5 / CSS3", "JavaScript ES6+", "Tailwind CSS", "Bootstrap", "Framer Motion", "React Hooks", "React Router"]} />
                <SkillGroup label="Backend & Database" tags={["REST API Design", "JWT Auth", "Mongoose ODM", "MySQL", "Firebase"]} />
                <SkillGroup label="Dev Tools" tags={["Git / GitHub", "Vite", "Postman", "VS Code", "Vercel", "PHP / Laravel", "WordPress"]} />
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
