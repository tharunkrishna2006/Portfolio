import { Github, Linkedin, Mail, Twitter } from "lucide-react";



export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const personalInfo = {
    name: "THARUN KRISHNA",
    title: "Creative Developer",
    subtitle: "Full Stack Developer & Creative Technologist",
    bio: `I’m a passionate full-stack developer who loves building immersive, high-performance digital experiences from end to end. I enjoy turning ideas into reality — designing clean, intuitive interfaces on the front end while developing scalable, efficient systems on the back end. My focus is always on creating applications that are fast, responsive, and thoughtfully crafted.

My journey into web development began with curiosity about how things work on the internet, and it quickly grew into a strong passion for building meaningful digital products. I’m constantly refining my skills, writing clean and maintainable code, and exploring new technologies to create experiences that not only look great but also perform seamlessly.`,
    yearsOfExperience: 3,
    email: "tharuntamil85@gmail.com",
};

export const skills = {
    frontend: ["Python", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "MySQL"],
    tools: ["Git", "Docker", "Vercel", "Cursor", "Antigravity"],
};

export const experience = [
    {
        id: 1,
        role: "Web Developer Intern ",
        company: "Anaimalais Coco.",
        duration: "2025 - Present",
        description: [
            "Led the migration of a legacy dashboard to React resulting in a 40% performance boost.",
            "Built a new inventory management system for the company.",
            "Mentored junior developers and established code review best practices.",
        ],
    },

    {
        id: 2,
        role: "Team Lead",
        company: "Smart India Hackathon 2025",
        duration: "Aug - Sep (2025)",
        description: [
            "Led a team of 6 people to build a innovative solution for the hackathon.",
            "Built a dashboard for AI based rockfall prediction system in open pit mines.",
            "Used AI-ML models to predict rockfalls and alert the miners.",
        ],
    },
    {
        id: 3,
        role: "Team Lead",
        company: "MSME IDEA HACKATHON 5.0",
        duration: "Jul - Aug (2025)",
        description: [
            "Led a team of 4 people to build a solution for landslide detection and early warning system.",
            "Built a dashboard for AI based landslide detection and early warning system.",
            "Used AI-ML models to predict landslides and alert the authorities.",
        ],
    },
    {
        id: 4,
        role: "Front-end Developer Intern",
        company: "Synovers",
        duration: "Jun - Jul (2025)",
        description: [
            "Developed a front-end for a travel agency website.",
            "Collaborated closely with designers to ensure pixel-perfect implementation of UI/UX designs.",
            "Summer internship.",
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: "Business Website",
        description: "Designed and developed a modern, responsive website for Sri Krishna Silks, showcasing its heritage, products, and brand story with an elegant and user-friendly interface..",
        image: "/project1.png",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API"],
        liveUrl: "https://srikrishnasilksofficial.vercel.app/",
        githubUrl: "https://github.com/example",
    },

];

export const socialLinks = [
    { name: "GitHub", url: "https://github.com/tharunkrishna2006", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tharun-krishna-5559b8280", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/Krishh2306", icon: Twitter },
    { name: "Email", url: "mailto:tharuntamil85@gmail.com", icon: Mail },
];
