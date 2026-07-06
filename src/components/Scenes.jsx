import React from "react";
import { resumeData as R } from "../data/resume";
import {
  Sparkles, User, Cpu, Briefcase, Code2, GraduationCap, Trophy, Send,
  Mail, Github, Linkedin, MapPin, Database, Server, Layers, Shield, Cloud, Wrench
} from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`glass-card ${className}`}>{children}</div>
);

const Sign = ({ children }) => (
  <div className="wood-sign">
    <div className="wood-sign-inner">{children}</div>
    <div className="wood-sign-post" />
  </div>
);

export const HomeScene = () => (
  <div className="scene-content home-scene">
    <div className="home-banner">
      <div className="home-eyebrow">
        <Sparkles size={16} /> Interactive Resume
      </div>
      <h1 className="home-title">
        <span className="title-line">HELLO,</span>
        <span className="title-line title-name">I&#39;M {R.firstName}</span>
      </h1>
      <p className="home-sub">{R.role} &middot; {R.location}</p>
      <div className="home-hint">
        Use <kbd>←</kbd> <kbd>→</kbd> arrow keys or the buttons below to explore my journey.
      </div>
    </div>
  </div>
);

export const AboutScene = () => (
  <div className="scene-content two-col">
    <Sign>
      <User size={18} />
      <span>Level 2 · About Me</span>
    </Sign>
    <Card className="about-card">
      <h2 className="section-title">A little about me</h2>
      <p className="lead-text">{R.summary}</p>
      <div className="chip-row">
        <span className="chip"><MapPin size={14}/> {R.location}</span>
        <span className="chip">3 years experience</span>
        <span className="chip">Banking &amp; Big Data</span>
        <span className="chip">Full Stack Developer</span>
        

      </div>
    </Card>
  </div>
);

const skillIcon = (cat) => {
  const map = {
    Frontend: <Layers size={18} />,
    Backend: <Server size={18} />,
    Databases: <Database size={18} />,
    BigData: <Cloud size={18} />,
    DevOps: <Wrench size={18} />,
    Security: <Shield size={18} />,
  };
  return map[cat] || <Cpu size={18} />;
};

export const SkillsScene = () => (
  <div className="scene-content">
    <Sign>
      <Cpu size={18} />
      <span>Level 3 · Skills</span>
    </Sign>
    <div className="skills-grid">
      {Object.entries(R.skills).map(([cat, items]) => (
        <Card key={cat} className="skill-card">
          <div className="skill-head">
            <span className="skill-icon">{skillIcon(cat)}</span>
            <h3>{cat === "BigData" ? "Big Data" : cat}</h3>
          </div>
          <div className="skill-tags">
            {items.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export const ExperienceScene = () => (
  <div className="scene-content">
    <Sign>
      <Briefcase size={18} />
      <span>Level 4 · Experience</span>
    </Sign>
    {R.experience.map((e, i) => (
      <Card key={i} className="exp-card">
        <div className="exp-head">
          <div>
            <h3 className="exp-role">{e.role}</h3>
            <div className="exp-company">{e.company} · {e.location}</div>
          </div>
          <div className="exp-duration">{e.duration}</div>
        </div>
        <ul className="exp-list">
          {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
        </ul>
      </Card>
    ))}
  </div>
);

export const ProjectsScene = () => (
  <div className="scene-content">
    <Sign>
      <Code2 size={18} />
      <span>Level 5 · Projects</span>
    </Sign>
    <div className="projects-grid">
      {R.projects.map((p, i) => (
        <Card key={i} className="project-card">
        <a href={`https://skillbridge-e-learning-platform-8wj.vercel.app/`}>
          <div className="project-mock">
            <div className="mock-bar">
              <span/><span/><span/>
            </div>
            <div className="mock-body">
              <div className="mock-line w-90"/>
              <div className="mock-line w-70"/>
              <div className="mock-line w-80"/>
              <div className="mock-btn">Preview
              </div>
            </div>
          </div>
          </a>
          <div className="project-info">
            <h3>{p.name}</h3>
            <div className="stack-line">{p.stack}</div>
            <ul>
              {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
            <a href={`https://${p.link}`} target="_blank" rel="noreferrer" className="project-link">
              <Github size={14}/> {p.link}
            </a>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export const EducationScene = () => (
  <div className="scene-content">
    <Sign>
      <GraduationCap size={18} />
      <span>Level 6 · Journey</span>
    </Sign>
    <Card className="about-card">
      <h2 className="section-title">The path so far</h2>
      <p className="lead-text">
        My road to Full Stack: from curiosity about the web to shipping banking-grade systems.
        Along the way I&#39;ve deepened my craft in React, Node, Python, and the Big Data stack that
        powers enterprise workflows at scale.
      </p>
      <div className="edu-timeline">
        {R.education.map((e, i) => (
          <div className="edu-node" key={i}>
            <div className="edu-dot" />
            <div>
              <strong>{e.year}</strong><br />
              {e.degree}
              {e.institution && <> — {e.institution}</>}<br/>
              {e.cgpa && <>CGPA: {e.cgpa}</>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);
export const AchievementsScene = () => (
  <div className="scene-content">
    <Sign>
      <Trophy size={18} />
      <span>Level 7 · Achievements</span>
    </Sign>
    <div className="ach-grid">
      {R.achievements.map((a, i) => (
        <Card key={i} className="ach-card">
          <div className="ach-badge">
            <Trophy size={20} />
          </div>
          <p>{a}</p>
        </Card>
      ))}
    </div>
  </div>
);

export const ContactScene = () => (
  <div className="scene-content">
    <Sign>
      <Send size={18} />
      <span>Level 8 · Let&#39;s Connect</span>
    </Sign>
    <Card className="contact-card">
      <h2 className="section-title">Thanks for playing through my resume!</h2>
      <p className="lead-text">Have a project or a role in mind? I&#39;d love to hear from you.</p>
      <div className="contact-grid">
        <a className="contact-tile" href={`mailto:${R.email}`}>
          <Mail size={20}/><div><span>Email</span><strong>{R.email}</strong></div>
        </a>
        <a className="contact-tile" href={`https://${R.linkedin}`} target="_blank" rel="noreferrer">
          <Linkedin size={20}/><div><span>LinkedIn</span><strong>{R.linkedin}</strong></div>
        </a>
        <a className="contact-tile" href={`https://${R.github}`} target="_blank" rel="noreferrer">
          <Github size={20}/><div><span>GitHub</span><strong>{R.github}</strong></div>
        </a>
      </div>
    </Card>
  </div>
);
