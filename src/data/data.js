import * as Icons from "../assets/icons";
import * as LogoImages from "../assets/index";

// 🧠 Skills
export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 85, icon: Icons.SiReact },
      { name: "Next.js", level: 60, icon: Icons.SiNextdotjs },
      { name: "JavaScript (ES6+)", level: 80, icon: Icons.SiJavascript },
      { name: "TypeScript", level: 80, icon: Icons.SiTypescript },
      { name: "Tailwind CSS", level: 90, icon: Icons.SiTailwindcss },
      { name: "HTML5 / CSS3", level: 95, icon: Icons.SiHtml5 },
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Icons.Rocket,
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 80, icon: Icons.Code },
      { name: "Express.js", level: 65, icon: Icons.SiExpress },
      { name: "MongoDB", level: 85, icon: Icons.SiMongodb },
      { name: "MySQL", level: 90, icon: Icons.SiMysql },
    ],
    color: "from-green-500 to-emerald-500",
    icon: Icons.Code,
  },
  {
    category: "Database & Tools",
    items: [
      { name: "Git / GitHub", level: 95, icon: Icons.FaGithub },
      { name: "REST APIs", level: 85, icon: Icons.SiPostman },
      { name: "Postman", level: 80, icon: Icons.SiPostman },
      { name: "Figma", level: 75, icon: Icons.SiFigma },
    ],
    color: "from-purple-500 to-pink-500",
    icon: Icons.ToolCase,
  },
];

// 🎓 Education
export const education = [
  {
    degree: "Master’s Degree in Software Engineering and DevOps",
    institution: "Horizon School of Digital Technologies",
    year: "2025 - 2027",
    status: "Ongoing",
    description:
      "Pursuing a Master’s Degree in Software Engineering and DevOps, focusing on modern software development methodologies, cloud computing, continuous integration/continuous deployment (CI/CD), and the adoption of cutting-edge frameworks and tools for scalable and efficient applications.",
    achievements: ["On going"],
    certificate: "Honors",
    icon: Icons.BookOpen,
  },
  {
    degree: "Bachelor’s Degree in Computer Science",
    institution: "Higher Institute of Technological Studies (ISET) of Sousse",
    year: "2021 - 2024",
    description:
      "Bachelor’s degree in Computer Technology / Information Technology from ISET Sousse, graduating with Excellent grade and a CGPA of 3.5 over the course of 3 years. Was involved in campus activities, serving as Vice President of the Google Developer Student Club (GDSC ISETSo), where I collaborated on tech projects, workshops, and community initiatives to enhance practical skills and team leadership.",
    achievements: [
      "Graduated with excellent grades.",
      "GDSC ISETSo Vice President",
    ],
    certificate: "Honors",
    gpa: "3.5/4.0",
    status: "Graduated with honors - Top 1% of Class 2024",
    icon: Icons.GraduationCap,
  },
];

// 💼 Experience
export const experience = [
  {
    role: "Junior Software Engineer · Full-Time",
    company: "Dasseti",
    year: "Sep 2024 - Oct 2025",
    location: "Dubai, UAE",
    description:
      "Dasseti is dedicated to revolutionizing investment data management by seamlessly integrating AI, automation, and human insight. My role involves contributing to the development of innovative solutions that empower institutional investors, consultants, GPs, and asset managers to excel in Due Diligence, Investor Relations, and ESG.",
    skills: ["ASP.NET", "AngularJS", "C#", "Databases"],
    icon: Icons.Briefcase,
    logo: LogoImages.DassetiLogo,
  },
  {
    role: "Full Stack Developer Intern · Apprenticeship",
    company: "Dasseti",
    year: "Feb 2024 - May 2024 · 4 months",
    location: "Dubai, UAE (remote)",
    description:
      "Designed and implemented an ETL pipeline using .NET and SQL Server to seamlessly integrate SEC Form ADV data into Dasseti's systems, following clean architecture principles. Enhanced performance by applying database normalization and optimizing batch processing..",
    skills: ["REST APIs", "ASP.NET", "C#", "ETL"],
    icon: Icons.Code,
    logo: LogoImages.DassetiLogo,
  },
  {
    role: "Frontend Web Developer · Internship ",
    company: "Dev-IT",
    year: "Jan 2023 - Feb 2023",
    location: "Sousse, Tunisia",
    description:
      "Developed and maintained front-end web applications using HTML, CSS, and JavaScript, focusing on user experience and responsive design.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: Icons.Code,
    logo: LogoImages.DevItLogo,
  },
  {
    role: "Web Developer · Internship",
    company: "Dev-IT",
    year: "Jan 2022 - Feb 2022",
    location: "Sousse, Tunisia",
    description:
      "Developed and maintained web applications using a variety of technologies, including HTML, CSS, JavaScript, and PHP (Symfony).",
    skills: ["Symfony", "HTML", "CSS", "JavaScript", "REST APIs"],
    icon: Icons.Code,
    logo: LogoImages.DevItLogo,
  },
];

// 🚀 Projects
export const projects = [
  {
    title: "PrintWorks",
    description:
      "A dynamic web application built with React and SCSS, featuring a modern and intuitive design with smooth animations and interactive elements. It includes a functional admin panel dashboard for efficient management and control.",
    technologies: ["React", "SCSS"],
    link: "#",
    github: "#",
    image: LogoImages.PrintWorks,
    status: "Completed",
    category: "Frontend",
    icon: Icons.Code,
  },
  {
    title: "First Portfolio Website",
    description:
      "My first modern personal portfolio built with HTML, CSS, JavaScript to showcase my skills and projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://mohamedaminezalila.github.io/Portfolio/",
    github: "https://github.com/MohamedAmineZalila/Portfolio",
    image: LogoImages.PortfolioImage,
    status: "Live",
    category: "Frontend",
    icon: Icons.Briefcase,
  },
  {
    title: "NutriScan",
    description:
      "A mobile app built in Java for Android that connects to the Open Food Facts API, allowing users to scan or upload product images to access detailed nutrition data. It includes a .NET-based admin panel with SQL Server integration for managing products.",
    technologies: [
      "Android",
      "Java",
      "ASP.NET",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "#",
    github: "https://github.com/MohamedAmineZalila/NutriScan",
    image: LogoImages.NutriScan,
    status: "Completed",
    category: "Web & Mobile App",
    icon: Icons.Rocket,
  },
  {
    title: "QuizTopia",
    description:
      "Teamed up to build 'Quiztopia,' a feature-rich quiz web app using Symfony. My focus was on extensive frontend development with Symfony and bootstrap and little backend, ensuring seamless quiz creation, management, and user engagement.",
    technologies: ["Symfony", "PHP", "Bootstrap", "SQL", "JavaScript"],
    link: "#",
    github: "https://github.com/MohamedAmineZalila/QuizTopia",
    image: LogoImages.QuizTopia,
    status: "Completed",
    category: "Full Stack",
    icon: Icons.BookOpen,
  },
  {
    title: "DevConnect",
    description:
      "A developer-focused platform that allows users to share their profiles, showcase projects, and connect through a simple community feed. Built with a focus on clean UI and smooth interactivity.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    link: "#",
    github: "#",
    image: LogoImages.DevConnect,
    status: "In Development",
    category: "Web App",
    icon: Icons.Users,
  },
  {
    title: "Shopverse",
    description:
      "An elegant e-commerce web application offering smooth product browsing, shopping cart management.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    image: LogoImages.Shopverse,
    status: "In Development",
    category: "Full Stack",
    icon: Icons.ShoppingCart,
  },
];

// 🗂️ Tabs
export const tabs = [
  {
    id: "about",
    label: "About Me",
    icon: Icons.User,
    color: "from-blue-500 to-cyan-500",
    description: "Get to know me better.",
  },
  {
    id: "skills",
    label: "Skills",
    icon: Icons.Code,
    color: "from-purple-500 to-pink-500",
    description: "My technical expertise.",
  },
  {
    id: "education",
    label: "Education",
    icon: Icons.GraduationCap,
    color: "from-green-500 to-emerald-500",
    description: "Academic background.",
  },
  {
    id: "experience",
    label: "Experience",
    icon: Icons.BriefcaseBusinessIcon,
    color: "from-yellow-500 to-orange-500",
    description: "My work experiences",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Icons.Rocket,
    color: "from-red-500 to-pink-500",
    description: "Featured works.",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Icons.Mail,
    color: "from-indigo-500 to-blue-500",
    description: "Let’s connect.",
  },
];

// 📞 Contact Info
export const contact = {
  email: "medamine.zalila@gmail.com",
  github: "https://github.com/MohamedAmineZalila",
  linkedin: "https://www.linkedin.com/in/medamine-zalila/",
};
