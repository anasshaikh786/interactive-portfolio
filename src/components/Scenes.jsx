import React from "react";
import {
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Server,
  Shield,
  Sparkles,
  Trophy,
  User,
  Wrench,
} from "lucide-react";
import { resumeData as R } from "../data/resume";

const Card = ({ children, className = "" }) => (
  <div className={`glass-card ${className}`}>{children}</div>
);

const Sign = ({ children }) => (
  <div className="wood-sign">
    <div className="wood-sign-inner">{children}</div>
    <div className="wood-sign-post" />
  </div>
);

const skillIcon = (category) => {
  const icons = {
    Frontend: <Layers size={18} />,
    Backend: <Server size={18} />,
    Databases: <Database size={18} />,
    "Big Data": <Cloud size={18} />,
    DevOps: <Wrench size={18} />,
    "Authentication & Security": <Shield size={18} />,
  };

  return icons[category] || <Cpu size={18} />;
};

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
        Use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> arrow keys or the buttons below to explore my journey.
      </div>
    </div>
  </div>
);

export const AboutScene = () => (
  <div className="scene-content two-col">
    <Sign>
      <User size={18} />
      <span>Level 2 &middot; About Me</span>
    </Sign>
    <Card className="about-card">
      <h2 className="section-title">A little about me</h2>
      <p className="lead-text">{R.summary}</p>
      <div className="chip-row">
        <span className="chip"><MapPin size={14} /> {R.location}</span>
        <span className="chip">3 years experience</span>
        <span className="chip">Banking &amp; Big Data</span>
        <span className="chip">Full Stack Developer</span>
      </div>
    </Card>
  </div>
);

export const SkillsScene = () => (
  <div className="scene-content">
    <Sign>
      <Cpu size={18} />
      <span>Level 3 &middot; Skills</span>
    </Sign>
    <div className="skills-grid">
      {Object.entries(R.skills).map(([category, items]) => (
        <Card key={category} className="skill-card">
          <div className="skill-head">
            <span className="skill-icon">{skillIcon(category)}</span>
            <h3>{category}</h3>
          </div>
          <div className="skill-tags">
            {items.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
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
      <span>Level 4 &middot; Experience</span>
    </Sign>
    {R.experience.map((experience) => (
      <Card key={`${experience.company}-${experience.role}`} className="exp-card">
        <div className="exp-head">
          <div>
            <h3 className="exp-role">{experience.role}</h3>
            <div className="exp-company">{experience.company} &middot; {experience.location}</div>
          </div>
          <div className="exp-duration">{experience.duration}</div>
        </div>
        <ul className="exp-list">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Card>
    ))}
  </div>
);

export const ProjectsScene = () => (
  <div className="scene-content">
    <Sign>
      <Code2 size={18} />
      <span>Level 5 &middot; Projects</span>
    </Sign>
    <div className="projects-grid">
      {R.projects.map((project) => (
        <Card key={project.name} className="project-card">
          <a className="project-preview" href={project.preview} target="_blank" rel="noreferrer" aria-label={`${project.name} preview`}>
            <div className="project-mock">
              <div className="mock-bar">
                <span /><span /><span />
              </div>
              <div className="mock-body">
                <div className="mock-line w-90" />
                <div className="mock-line w-70" />
                <div className="mock-line w-80" />
                <div className="mock-btn">Preview</div>
              </div>
            </div>
          </a>
          <div className="project-info">
            <h3>{project.name}</h3>
            <div className="stack-line">{project.stack}</div>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href={`https://${project.link}`} target="_blank" rel="noreferrer" className="project-link">
              <Github size={14} /> {project.link}
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
      <span>Level 6 &middot; Journey</span>
    </Sign>
    <Card className="about-card">
      <h2 className="section-title">The path so far</h2>
      <p className="lead-text">
        My road to Full Stack: from curiosity about the web to shipping banking-grade systems.
        Along the way I&#39;ve deepened my craft in React, Node, Python, and the Big Data stack that
        powers enterprise workflows at scale.
      </p>
      <div className="edu-timeline">
        {R.education.map((education) => (
          <div className="edu-node" key={`${education.degree}-${education.year}`}>
            <div className="edu-dot" />
            <div>
              <strong>{education.year}</strong><br />
              {education.degree}
              {education.institution && <> &mdash; {education.institution}</>}
              {education.cgpa && <><br />CGPA: {education.cgpa}</>}
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
      <span>Level 7 &middot; Achievements</span>
    </Sign>
    <div className="ach-grid">
      {R.achievements.map((achievement) => (
        <Card key={achievement} className="ach-card">
          <div className="ach-badge">
            <Trophy size={20} />
          </div>
          <p>{achievement}</p>
        </Card>
      ))}
    </div>
  </div>
);

export const ContactScene = () => (
  <div className="scene-content">
    <Sign>
      <Send size={18} />
      <span>Level 8 &middot; Let&#39;s Connect</span>
    </Sign>
    <Card className="contact-card">
      <h2 className="section-title">Thanks for playing through my resume!</h2>
      <p className="lead-text">Have a project or a role in mind? I&#39;d love to hear from you.</p>
      <div className="contact-grid">
        <a className="contact-tile" href={`mailto:${R.email}`}>
          <Mail size={20} />
          <div><span>Email</span><strong>{R.email}</strong></div>
        </a>
        <a className="contact-tile" href={`https://${R.linkedin}`} target="_blank" rel="noreferrer">
          <Linkedin size={20} />
          <div><span>LinkedIn</span><strong>{R.linkedin}</strong></div>
        </a>
        <a className="contact-tile" href={`https://${R.github}`} target="_blank" rel="noreferrer">
          <Github size={20} />
          <div><span>GitHub</span><strong>{R.github}</strong></div>
        </a>
      </div>
    </Card>
  </div>
);
