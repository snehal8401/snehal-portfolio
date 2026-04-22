import { useEffect, useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const resumePath = "/Snehal_Shinde_Resume.pdf";

  const skills = {
    forensicTools: [
      "Magnet Axiom",
      "Autopsy",
      "FTK Imager",
      "EnCase",
      "Intella",
      "MOBILedit Forensic Express",
      "Disk Drill",
      "Logicube Talon Ultimate",
      "iMazing",
    ],
    securityTools: ["Wireshark", "NetworkMiner", "Nmap", "Burp Suite", "Nessus"],
    platforms: ["Windows", "Linux", "NTFS", "FAT", "Basic Networking Concepts"],
    core: [
      "Digital Forensics",
      "Incident Investigation",
      "Evidence Analysis",
      "Chain of Custody",
      "Forensic Reporting",
      "Metadata Analysis",
      "Email Analysis",
      "OSINT",
      "Fraud Investigation",
    ],
  };

  const experience = [
    {
      company: "Spectra Management Consultancy Pvt. Ltd.",
      role: "Forensic Consultant",
      duration: "Apr 2025 – Present",
      location: "Pune, India",
      points: [
        "Investigated fraud cases, data leakage incidents, and internal complaints through structured digital forensic analysis and case reporting.",
        "Analyzed emails, documents, financial records, and communication logs to identify irregular activities and support investigative conclusions.",
        "Used EnCase and Intella to extract and examine digital evidence while maintaining proper chain of custody and documentation practices.",
        "Reviewed system data, SAP records, and social media activity to understand case context and support accurate outcomes.",
        "Categorized findings into Level 1 and Level 2 severity for clear reporting and decision-making.",
      ],
    },
    {
      company: "Inception Solutions",
      role: "Information Technology Security Specialist",
      duration: "Oct 2024 – Apr 2025",
      location: "Pune, India",
      points: [
        "Identified security gaps in IT environments by reviewing configurations and network setups in support of risk assessments.",
        "Performed vulnerability checks on endpoints and networks to help uncover security weaknesses.",
        "Worked with technical teams to implement security improvements aligned with operational requirements.",
        "Conducted configuration reviews and advisory checks to strengthen system security and reduce risk exposure.",
      ],
    },
    {
      company: "Sana Cyber Forensics",
      role: "Cyber Crime Investigator",
      duration: "Apr 2022 – Jun 2023",
      location: "Pune, India",
      points: [
        "Investigated cybercrime cases by analyzing digital evidence collected from systems and storage devices.",
        "Performed forensic examination of systems and digital media for fraud, impersonation, and data misuse cases.",
        "Preserved digital evidence properly to maintain integrity for investigative and legal use.",
        "Prepared investigation summaries and reports for internal review and legal documentation.",
      ],
    },
    {
      company: "Sana Cyber Forensics",
      role: "Cyber Crime Investigator Intern",
      duration: "Aug 2021 – Mar 2022",
      location: "Pune, India",
      points: [
        "Assisted in forensic analysis of digital devices during active investigations.",
        "Extracted artifacts and reviewed metadata to support investigation processes and documentation.",
        "Maintained evidence logs and ensured secure handling of digital media throughout case work.",
      ],
    },
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH v12)",
    "Digital Forensics Essentials (DFE)",
    "Qualified Fact Exam 2024",
    "Introduction to Dark Web, Anonymity & Cryptocurrency",
    "SQL Injection Attacks",
    "Cloud Computing",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsResumeOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isResumeOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isResumeOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        :root{
          --bg:#020617;
          --text:#f8fafc;
          --muted:#cbd5e1;
          --subtle:#94a3b8;
          --accent:#67e8f9;
          --accent-2:#38bdf8;
          --line:rgba(148,163,184,0.10);
          --line-strong:rgba(103,232,249,0.20);
        }

        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          background:
            radial-gradient(circle at top left, rgba(34,211,238,0.09), transparent 28%),
            radial-gradient(circle at top right, rgba(59,130,246,0.10), transparent 30%),
            linear-gradient(180deg, #020617 0%, #031129 45%, #020617 100%);
          color:var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        a{text-decoration:none;color:inherit}
        button{font:inherit}

        .app-shell{
          min-height:100vh;
          overflow-x:hidden;
        }

        .container{
          width:min(1160px, calc(100% - 40px));
          margin:0 auto;
        }

        .nav-wrap{
          position:sticky;
          top:0;
          z-index:1000;
          backdrop-filter: blur(18px);
          background:rgba(2,6,23,0.72);
          border-bottom:1px solid rgba(148,163,184,0.07);
        }

        .nav{
          display:flex;
          align-items:center;
          justify-content:space-between;
          min-height:74px;
          gap:16px;
          padding:6px 0;
        }

        .brand{
          display:flex;
          align-items:center;
          gap:14px;
          font-weight:700;
          min-width:0;
        }

        .brand-badge{
          width:42px;
          height:42px;
          border-radius:14px;
          display:grid;
          place-items:center;
          color:#02131a;
          background:linear-gradient(135deg, var(--accent), var(--accent-2));
          box-shadow:0 10px 30px rgba(34,211,238,0.18);
          font-weight:800;
          flex-shrink:0;
        }

        .brand-text{
          display:flex;
          flex-direction:column;
          gap:2px;
          min-width:0;
        }

        .brand-name{
          font-size:15px;
          font-weight:700;
          letter-spacing:-0.2px;
          line-height:1.2;
        }

        .brand-role{
          font-size:12px;
          color:var(--subtle);
          line-height:1.2;
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:10px;
          flex-wrap:wrap;
        }

        .nav-link{
          padding:10px 14px;
          border-radius:999px;
          color:var(--muted);
          border:1px solid transparent;
          transition:all 0.25s ease;
          cursor:pointer;
          background:transparent;
        }

        .nav-link:hover,
        .nav-link.active{
          color:var(--text);
          border-color:rgba(34,211,238,0.22);
          background:rgba(34,211,238,0.08);
        }

        .resume-nav-btn{
          padding:10px 14px;
          border-radius:999px;
          color:var(--muted);
          border:1px solid rgba(34,211,238,0.20);
          background:rgba(34,211,238,0.08);
          cursor:pointer;
          transition:all 0.25s ease;
        }

        .resume-nav-btn:hover{
          color:var(--text);
          border-color:rgba(34,211,238,0.32);
          background:rgba(34,211,238,0.14);
        }

        .hero{
          position:relative;
          overflow:hidden;
          padding:74px 0 46px;
        }

        .hero::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(rgba(103,232,249,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(103,232,249,0.03) 1px, transparent 1px);
          background-size:56px 56px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.52), transparent 94%);
          pointer-events:none;
        }

        .glow{
          position:absolute;
          border-radius:999px;
          filter:blur(100px);
          opacity:0.18;
          pointer-events:none;
        }

        .glow-1{
          width:300px;
          height:300px;
          background:#22d3ee;
          top:-90px;
          left:-90px;
        }

        .glow-2{
          width:360px;
          height:360px;
          background:#2563eb;
          top:0;
          right:-120px;
        }

        .hero-grid{
          position:relative;
          display:grid;
          grid-template-columns:1.16fr 0.84fr;
          gap:34px;
          align-items:start;
        }

        .eyebrow{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:10px 18px;
          border-radius:999px;
          border:1px solid rgba(34,211,238,0.20);
          background:rgba(8,47,73,0.16);
          color:var(--accent);
          font-weight:600;
          margin-bottom:22px;
          letter-spacing:-0.2px;
        }

        .hero-title{
          margin:0;
          font-size:clamp(48px, 5.7vw, 74px);
          line-height:0.94;
          letter-spacing:-2.4px;
          max-width:760px;
        }

        .hero-title .line-1,
        .hero-title .line-2{
          display:block;
        }

        .accent-name{
          background: linear-gradient(90deg, #e2e8f0, #67e8f9 85%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub{
          margin:24px 0 0 0;
          font-size:21px;
          line-height:1.65;
          color:var(--text);
          max-width:720px;
          letter-spacing:-0.2px;
        }

        .hero-sub.muted{
          margin-top:12px;
          color:var(--muted);
          opacity:0.72;
          font-size:18px;
          line-height:1.75;
          max-width:690px;
        }

        .hero-actions{
          display:flex;
          flex-wrap:wrap;
          gap:14px;
          margin-top:30px;
        }

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          padding:14px 20px;
          border-radius:16px;
          border:1px solid rgba(148,163,184,0.14);
          background:rgba(255,255,255,0.04);
          color:var(--text);
          transition:all 0.25s ease;
          box-shadow:0 8px 20px rgba(2,6,23,0.10);
          cursor:pointer;
        }

        .btn:hover{
          transform:translateY(-2px);
          border-color:rgba(103,232,249,0.24);
          background:rgba(255,255,255,0.06);
        }

        .btn.primary{
          background:linear-gradient(135deg, rgba(34,211,238,0.14), rgba(56,189,248,0.14));
          color:var(--accent);
          border-color:rgba(34,211,238,0.24);
          box-shadow:0 12px 28px rgba(34,211,238,0.10);
        }

        .btn.download{
          position:relative;
          overflow:hidden;
        }

        .btn.download::after{
          content:"";
          position:absolute;
          inset:0;
          transform:translateX(-100%);
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition:transform 0.6s ease;
        }

        .btn.download:hover::after{
          transform:translateX(100%);
        }

        .explore-link{
          display:inline-flex;
          align-items:center;
          gap:8px;
          margin-top:16px;
          color:var(--muted);
          font-size:15px;
          transition:all 0.25s ease;
          cursor:pointer;
        }

        .explore-link:hover{
          color:var(--accent);
          transform:translateX(2px);
        }

        .contact-pills{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:20px;
        }

        .pill{
          padding:13px 16px;
          border-radius:16px;
          border:1px solid rgba(148,163,184,0.12);
          background:rgba(255,255,255,0.025);
          color:var(--muted);
          transition:all 0.25s ease;
        }

        .pill:hover{
          border-color:rgba(103,232,249,0.20);
          color:var(--text);
        }

        .quick-stats{
          display:grid;
          grid-template-columns:repeat(3, 1fr);
          gap:18px;
          margin-top:34px;
        }

        .stat{
          background:linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.015));
          border:1px solid var(--line);
          border-radius:22px;
          padding:20px;
          transition:transform 0.28s ease, border-color 0.28s ease;
        }

        .stat:hover{
          transform:translateY(-6px);
          border-color:var(--line-strong);
        }

        .stat-number{
          font-size:28px;
          font-weight:800;
          color:var(--accent);
        }

        .stat-label{
          color:var(--subtle);
          margin-top:8px;
          font-size:14px;
          line-height:1.5;
        }

        .hero-card{
          background:linear-gradient(180deg, rgba(30,41,59,0.66), rgba(15,23,42,0.64));
          border:1px solid var(--line);
          border-radius:28px;
          padding:24px;
          box-shadow:0 18px 46px rgba(2,6,23,0.18);
          position:relative;
          overflow:hidden;
          margin-top:96px;
        }

        .hero-card::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg, rgba(103,232,249,0.05), transparent 45%, rgba(59,130,246,0.05));
          pointer-events:none;
        }

        .hero-card-title{
          color:var(--accent);
          text-transform:uppercase;
          letter-spacing:3px;
          font-size:13px;
          font-weight:700;
          margin:0 0 14px 0;
          position:relative;
          z-index:1;
        }

        .hero-card-heading{
          font-size:clamp(26px, 4vw, 40px);
          line-height:1.08;
          margin:0 0 20px 0;
          position:relative;
          z-index:1;
          letter-spacing:-1px;
        }

        .hero-card-stack{
          display:grid;
          gap:12px;
          position:relative;
          z-index:1;
        }

        .mini-feature{
          background:rgba(2,6,23,0.46);
          border:1px solid rgba(148,163,184,0.07);
          border-radius:20px;
          padding:16px 16px;
          color:var(--muted);
          font-size:17px;
          line-height:1.5;
        }

        .section{
          padding:44px 0;
        }

        .section-head{
          margin-bottom:26px;
        }

        .section-kicker{
          margin:0 0 10px 0;
          color:var(--accent);
          letter-spacing:3px;
          font-size:13px;
          font-weight:700;
          text-transform:uppercase;
        }

        .section-title{
          margin:0;
          font-size:clamp(36px, 5vw, 64px);
          letter-spacing:-1.6px;
          line-height:0.98;
        }

        .section-desc{
          margin-top:16px;
          max-width:820px;
          color:var(--muted);
          font-size:19px;
          line-height:1.85;
        }

        .skills-grid{
          display:grid;
          grid-template-columns:repeat(2, 1fr);
          gap:22px;
        }

        .card{
          background:rgba(3,10,29,0.60);
          border:1px solid var(--line);
          border-radius:30px;
          padding:28px;
          box-shadow:0 12px 34px rgba(2,6,23,0.12);
          transition:transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .card:hover{
          transform:translateY(-4px);
          border-color:var(--line-strong);
          box-shadow:0 18px 42px rgba(2,6,23,0.18);
        }

        .card-title{
          margin:0 0 20px 0;
          font-size:26px;
          letter-spacing:-0.6px;
        }

        .chips{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
        }

        .chip{
          padding:10px 14px;
          border-radius:999px;
          background:rgba(2,6,23,0.70);
          border:1px solid rgba(148,163,184,0.08);
          color:var(--muted);
          transition:all 0.2s ease;
        }

        .chip:hover{
          color:var(--text);
          border-color:rgba(103,232,249,0.18);
        }

        .experience-wrap{
          display:grid;
          gap:22px;
        }

        .experience-card{
          display:grid;
          gap:20px;
        }

        .experience-top{
          display:flex;
          gap:18px;
          justify-content:space-between;
          align-items:flex-start;
          flex-wrap:wrap;
        }

        .job-title{
          margin:0;
          font-size:26px;
          letter-spacing:-0.6px;
        }

        .job-company{
          color:var(--accent);
          margin-top:8px;
          font-size:18px;
          font-weight:600;
        }

        .job-location{
          color:var(--subtle);
          margin-top:6px;
          font-size:17px;
        }

        .job-duration{
          padding:12px 18px;
          border-radius:999px;
          background:rgba(2,6,23,0.75);
          border:1px solid rgba(148,163,184,0.07);
          color:var(--muted);
          white-space:nowrap;
        }

        .bullet-list{
          list-style:none;
          margin:0;
          padding:0;
          display:grid;
          gap:14px;
        }

        .bullet-item{
          display:flex;
          gap:14px;
          align-items:flex-start;
          color:var(--muted);
          line-height:1.75;
          font-size:17px;
        }

        .bullet-dot{
          width:10px;
          height:10px;
          border-radius:999px;
          background:linear-gradient(135deg, var(--accent), var(--accent-2));
          margin-top:11px;
          flex-shrink:0;
          box-shadow:0 0 16px rgba(103,232,249,0.30);
        }

        .project-grid{
          display:grid;
          grid-template-columns:1.06fr 0.94fr;
          gap:22px;
        }

        .project-title{
          font-size:clamp(34px, 5vw, 58px);
          line-height:1.02;
          margin:0 0 22px 0;
          letter-spacing:-1.4px;
        }

        .project-copy p{
          margin:0 0 18px 0;
          color:var(--muted);
          line-height:1.9;
          font-size:18px;
        }

        .side-stack{
          display:grid;
          gap:22px;
        }

        .subcard{
          background:rgba(2,6,23,0.40);
          border:1px solid rgba(148,163,184,0.07);
          border-radius:24px;
          padding:24px;
        }

        .edu-title{
          margin:0 0 10px 0;
          font-size:22px;
          letter-spacing:-0.5px;
        }

        .edu-text{
          color:var(--muted);
          line-height:1.75;
          font-size:17px;
        }

        .contact-card{
          background:linear-gradient(90deg, rgba(34,211,238,0.06), rgba(15,23,42,0.94), rgba(59,130,246,0.06));
          border:1px solid var(--line);
          border-radius:34px;
          padding:34px;
          box-shadow:0 18px 42px rgba(2,6,23,0.16);
        }

        .contact-flex{
          display:flex;
          justify-content:space-between;
          gap:22px;
          align-items:center;
          flex-wrap:wrap;
        }

        .footer{
          padding:20px 0 42px;
          color:var(--subtle);
          text-align:center;
          font-size:15px;
        }

        .resume-modal-overlay{
          position:fixed;
          inset:0;
          background:rgba(2,6,23,0.82);
          backdrop-filter:blur(8px);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:3000;
          animation:fadeIn 0.25s ease;
          padding:20px;
        }

        .resume-modal{
          width:min(1100px, 100%);
          height:min(88vh, 900px);
          background:linear-gradient(180deg, rgba(8,17,33,0.98), rgba(11,23,48,0.98));
          border:1px solid rgba(103,232,249,0.18);
          border-radius:24px;
          overflow:hidden;
          box-shadow:0 20px 60px rgba(0,0,0,0.45);
          transform:translateY(0) scale(1);
          animation:modalIn 0.28s ease;
          display:flex;
          flex-direction:column;
        }

        .resume-modal-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          padding:16px 18px;
          border-bottom:1px solid rgba(148,163,184,0.10);
          background:rgba(255,255,255,0.02);
        }

        .resume-modal-title{
          font-size:16px;
          font-weight:700;
          color:var(--text);
        }

        .resume-modal-actions{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .resume-modal-body{
          flex:1;
          background:#0b1220;
        }

        .resume-frame{
          width:100%;
          height:100%;
          border:none;
          background:white;
        }

        @keyframes fadeIn{
          from{opacity:0}
          to{opacity:1}
        }

        @keyframes modalIn{
          from{
            opacity:0;
            transform:translateY(16px) scale(0.98);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @media (max-width: 1080px){
          .hero-grid,
          .project-grid,
          .skills-grid{
            grid-template-columns:1fr;
          }

          .hero-card{
            margin-top:10px;
          }

          .hero-title{
            max-width:100%;
          }
        }

        @media (max-width: 760px){
          .container{
            width:min(100% - 24px, 1160px);
          }

          .nav{
            min-height:70px;
            align-items:flex-start;
            padding:12px 0;
            flex-direction:column;
          }

          .nav-links{
            width:100%;
            overflow:auto;
            padding-bottom:2px;
            flex-wrap:nowrap;
          }

          .hero-card,
          .card,
          .contact-card{
            padding:22px;
            border-radius:24px;
          }

          .pill, .btn{
            width:100%;
            justify-content:center;
          }

          .contact-pills,
          .hero-actions,
          .resume-modal-actions{
            display:grid;
            grid-template-columns:1fr;
          }

          .job-duration{
            width:100%;
            text-align:center;
          }

          .hero-title{
            font-size:clamp(44px, 12vw, 60px);
            line-height:1.02;
          }

          .hero-sub{
            font-size:18px;
          }

          .hero-sub.muted{
            font-size:16px;
          }

          .quick-stats{
            grid-template-columns:1fr;
          }

          .section-desc{
            font-size:17px;
          }

          .bullet-item{
            font-size:16px;
          }

          .resume-modal{
            height:min(92vh, 900px);
          }
        }
      `}</style>

      <div className="app-shell">
        <div className="nav-wrap">
          <div className="container nav">
            <div className="brand">
              <div className="brand-badge">SS</div>
              <div className="brand-text">
                <div className="brand-name">Snehal Shinde</div>
                <div className="brand-role">Digital Forensics Portfolio</div>
              </div>
            </div>

            <div className="nav-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}

              <button
                className="resume-nav-btn"
                onClick={() => setIsResumeOpen(true)}
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        <section id="home" className="hero">
          <div className="glow glow-1" />
          <div className="glow glow-2" />
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Digital Forensics • Investigation • Cybersecurity</div>

              <h1 className="hero-title">
                <span className="line-1">Snehal</span>
                <span className="line-2 accent-name">Suhas Shinde</span>
              </h1>

              <p className="hero-sub">
                Digital Forensics & Cyber Investigation professional specializing in fraud detection,
                data leakage analysis, and forensic reporting.
              </p>

              <p className="hero-sub muted">
                Experienced in analyzing emails, documents, and system artifacts to uncover evidence
                and support investigative decisions.
              </p>

              <div className="hero-actions">
                <a className="btn primary" href="mailto:snehalshinde0301@gmail.com">
                  Hire Me
                </a>

                <button
                  className="btn"
                  onClick={() => setIsResumeOpen(true)}
                >
                  Preview Resume
                </button>

                <a
                  className="btn"
                  href="https://www.linkedin.com/in/snehal-shinde-8a6596263/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
              </div>

              <a
                className="explore-link"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                }}
              >
                Explore Portfolio ↓
              </a>

              <div className="contact-pills">
                <a className="pill" href="mailto:snehalshinde0301@gmail.com">
                  snehalshinde0301@gmail.com
                </a>
                <div className="pill">+91-917-577-2042</div>
                <div className="pill">Pune, India</div>
              </div>

              <div className="quick-stats">
                <div className="stat">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years in investigation and cyber-focused roles</div>
                </div>
                <div className="stat">
                  <div className="stat-number">9+</div>
                  <div className="stat-label">Forensic tools and platforms used</div>
                </div>
                <div className="stat">
                  <div className="stat-number">L1 / L2</div>
                  <div className="stat-label">Structured reporting and severity-based findings</div>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <p className="hero-card-title">Core Strength</p>
              <h2 className="hero-card-heading">Investigation-Focused Cyber Portfolio</h2>
              <div className="hero-card-stack">
                <div className="mini-feature">Corporate fraud and internal complaint investigations</div>
                <div className="mini-feature">Evidence extraction, metadata review, and forensic documentation</div>
                <div className="mini-feature">EnCase, Intella, Autopsy, FTK Imager, Wireshark, and Nessus</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Skills</p>
              <h2 className="section-title">Technical Profile</h2>
              <div className="section-desc">
                A balanced portfolio across digital forensics, investigative workflows, evidence handling,
                system review, security tooling, and reporting-oriented analysis.
              </div>
            </div>

            <div className="skills-grid">
              <SkillCard title="Forensic Tools" items={skills.forensicTools} />
              <SkillCard title="Security Tools" items={skills.securityTools} />
              <SkillCard title="Platforms" items={skills.platforms} />
              <SkillCard title="Core Skills" items={skills.core} />
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Experience</p>
              <h2 className="section-title">Professional Journey</h2>
              <div className="section-desc">
                A focused track record across digital forensics, cyber investigations, vulnerability review, and
                structured reporting for corporate and cybercrime cases.
              </div>
            </div>

            <div className="experience-wrap">
              {experience.map((job, index) => (
                <div key={index} className="card experience-card">
                  <div className="experience-top">
                    <div>
                      <h3 className="job-title">{job.role}</h3>
                      <div className="job-company">{job.company}</div>
                      <div className="job-location">{job.location}</div>
                    </div>
                    <div className="job-duration">{job.duration}</div>
                  </div>

                  <ul className="bullet-list">
                    {job.points.map((point, i) => (
                      <li key={i} className="bullet-item">
                        <span className="bullet-dot" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="section">
          <div className="container project-grid">
            <div className="card">
              <p className="section-kicker">Project</p>
              <h2 className="project-title">Corporate Data Leakage Investigation Simulation</h2>
              <div className="project-copy">
                <p>
                  Investigated a simulated data leakage case by analyzing emails, file system artifacts,
                  and user activity logs to identify suspicious behavior and reconstruct possible events.
                </p>
                <p>
                  Used Autopsy and FTK Imager to extract deleted files, browser history, and system metadata
                  for detailed forensic analysis.
                </p>
                <p>
                  Reconstructed the user activity timeline and identified potential data exfiltration patterns
                  based on file access history and external device usage.
                </p>
              </div>
            </div>

            <div className="side-stack">
              <div className="card">
                <p className="section-kicker">Education</p>
                <h3 className="card-title" style={{ marginBottom: 18 }}>Academic Background</h3>
                <div className="subcard">
                  <h4 className="edu-title">Shree Ramchandra College of Engineering</h4>
                  <div className="edu-text">
                    Bachelor of Engineering (Computer Science)
                    <br />
                    Pune, India • June 2020
                  </div>
                </div>
              </div>

              <div className="card">
                <p className="section-kicker">Certifications</p>
                <h3 className="card-title" style={{ marginBottom: 18 }}>Professional Learning</h3>
                <div className="chips">
                  {certifications.map((cert, index) => (
                    <span key={index} className="chip">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-flex">
                <div>
                  <p className="section-kicker">Contact</p>
                  <h2 className="section-title" style={{ marginBottom: 16 }}>Let’s Connect</h2>
                  <div className="section-desc" style={{ marginTop: 0, maxWidth: 760 }}>
                    Actively seeking opportunities in Digital Forensics, Cyber Investigation, and Security Analysis roles.
                  </div>
                </div>

                <div className="hero-actions" style={{ marginTop: 0 }}>
                  <a className="btn" href="mailto:snehalshinde0301@gmail.com">Email</a>
                  <a
                    className="btn primary"
                    href="https://www.linkedin.com/in/snehal-shinde-8a6596263/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container footer">
          © 2026 Snehal Suhas Shinde • Portfolio Website
        </div>

        {isResumeOpen && (
          <div className="resume-modal-overlay" onClick={() => setIsResumeOpen(false)}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
              <div className="resume-modal-top">
                <div className="resume-modal-title">Snehal Shinde Resume Preview</div>
                <div className="resume-modal-actions">
                  <a
                    className="btn"
                    href={resumePath}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in New Tab
                  </a>
                  <a
                    className="btn download"
                    href={resumePath}
                    download="Snehal_Shinde_Resume.pdf"
                  >
                    Download Resume
                  </a>
                  <button className="btn primary" onClick={() => setIsResumeOpen(false)}>
                    Close
                  </button>
                </div>
              </div>

              <div className="resume-modal-body">
                <iframe
                  className="resume-frame"
                  src={resumePath}
                  title="Snehal Shinde Resume"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="chips">
        {items.map((item, index) => (
          <span key={index} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}