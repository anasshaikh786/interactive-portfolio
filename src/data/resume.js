// Resume data for Mohd Anas Shaikh
export const resumeData = {
  name: "MOHD ANAS SHAIKH",
  firstName: "ANAS",
  role: "Full Stack Developer",
  location: "Mumbai, India",
  email: "mdanassk707@gmail.com",
  linkedin: "linkedin.com/in/mohd-anas-shaikh",
  github: "github.com/anasshaikh786",
  summary:
    "Full Stack Developer with nearly 3 years of experience building production-grade enterprise applications using React.js, Node.js, and Python, with strong expertise in Big Data integration (Cloudera Hive, HDFS) for banking systems. I own end-to-end architecture — from security compliance (LDAP, JWT, VAPT) to CI/CD automation — and enjoy turning complex requirements into reliable software that moves the business forward.",
  skills: {
    Langauges:["Java","Python","JavaScript","SQL"],
    Frontend: ["React.js", "Redux",  "HTML/CSS", "Tailwind CSS ","Bootstrap"],
    Backend: ["Node.js", "Express.js",  "REST APIs"],
    Databases: ["MongoDB", "PostgreSQL", "Oracle"],
    "Big Data": ["Apache Hive", "HDFS", "WebHDFS","Hadoop","Parquet"],
    DevOps: ["Git", "GitHub", "GitHub Actions","Apache Web Server","Postman", "UNIX"],
    "Authentication & Security": ["JWT","LDAP Authentication", "VAPT Remediation"],
  },
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      duration: "Sep 2023 - Present",
      location: "Mumbai, India",
      highlights: [
        "• Replaced a manual Excel workflow with a direct form pre-filled from Cloudera Hive, cutting turnaround by 60–70% (1–2 days → hours).",
        "• Architected the end-to-end GAP Application, including a deployment management module for tracking production releases.",
        "• Built a full audit trail via maker-checker (dual control) — every change tied to a requester & approver.",
        "• Designed a full-stack app (React, Node.js, Python) for file uploads to Cloudera Hive via WebHDFS, with validation, file preview, and Parquet conversion.",
        "• Built role-based access, schema, and reporting modules for structured, audit-compliant usage",
        "• Resolved all VAPT findings flagged by the bank for full security sign-off; integrated LDAP/JWT auth and automated CI/CD via GitHub Actions.",
      ],
    },
  ],
  projects: [
    {
      name: "SkillBridge — E-Learning Platform",
      stack: "MERN (React, Node, Express, MongoDB)",
      link: "github.com/anasshaikh786/skillbridge-e-learning-platform",
      points: [
        "• Built a full-stack ed-tech platform with course browsing/purchase and instructor analytics.",
        "• JWT auth with OTP verification, Razorpay payments, Cloudinary media.",
        "• Mongoose schemas + responsive UI in React, Redux, Tailwind.",
        "• Deployed on Vercel, Render, MongoDB Atlas.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech. (IT)",
      institution: "Thakur College of Engineering & Technology",
      year: "2019-2023",
      CGPA: "9.47/10",
    },
     {
      degree: "Higher Secondary",
      institution: "Wilson College",
      year: "2016-2018",  
    },
   
  ],
  achievements: [
    "Participated in JP Morgan's Code for Good Hackathon — built a tech solution for a social-impact challenge.",
    "Served as Student Placement Coordinator, liaising between recruiters and students.",
    "Volunteered in Extension Work Team, teaching underprivileged students online.",
  ],
};

export const levels = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
