import { Code, Database, Globe, Smartphone, Brain, Shield } from "lucide-react";

export const personalInfo = {
  name: "Hemant Singh",
  title: "Software Developer",
  subtitle: "4th year BTech CSE student passionate about creating innovative digital solutions",
  email: "rautanhemu@gmail.com",
  phone: "+91 7017862900",
  location: "Haridwar, Uttarakhand, India",
  status: "Open to work",
  about: "I am a passionate Computer Science Engineering student in my final year, dedicated to creating innovative digital solutions that make a real impact. My journey in technology has been driven by curiosity and a desire to solve complex problems through code.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
};

export const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    color: "text-[#F59E0B]",
    bgColor: "bg-[#F59E0B]/10",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Backend Development",
    icon: Database,
    color: "text-[#3B82F6]",
    bgColor: "bg-[#3B82F6]/10",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "Express.js", level: 82 }
    ]
  },
  {
    category: "Database & Tools",
    icon: Code,
    color: "text-[#10B981]",
    bgColor: "bg-[#10B981]/10",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 }
    ]
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A productivity mobile application built with React Native. Features include task organization, team collaboration, and progress tracking with beautiful animations.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    title: "AI Chatbot Platform",
    description: "An intelligent chatbot platform powered by machine learning. Built with Python, TensorFlow, and deployed on cloud infrastructure with real-time conversation capabilities.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "TensorFlow", "Flask", "AWS"],
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    title: "Blockchain Voting System",
    description: "A secure digital voting platform built on blockchain technology. Ensures transparency, immutability, and voter privacy using smart contracts and cryptographic security.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Solidity", "Web3.js", "Ethereum", "Truffle"],
    liveDemo: "#",
    github: "#",
    featured: true
  }
];

export const experiences = [
  {
    title: "Software Development Intern",
    company: "Tech Innovations Ltd.",
    period: "June 2024 - August 2024",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase for better performance.",
    technologies: ["React", "Node.js", "MongoDB"],
    type: "internship"
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Solutions Co.",
    period: "January 2024 - May 2024",
    description: "Focused on creating responsive and interactive user interfaces. Worked on UI/UX improvements and implemented modern design patterns to enhance user experience across multiple projects.",
    technologies: ["HTML/CSS", "JavaScript", "Vue.js"],
    type: "internship"
  },
  {
    title: "Research Assistant",
    company: "University Research Lab",
    period: "September 2023 - December 2023",
    description: "Assisted in machine learning research projects focusing on natural language processing. Contributed to data collection, model training, and performance evaluation of various ML algorithms.",
    technologies: ["Python", "TensorFlow", "Pandas"],
    type: "research"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "#",
    icon: "fab fa-linkedin"
  },
  {
    name: "GitHub", 
    url: "#",
    icon: "fab fa-github"
  },
  {
    name: "Twitter",
    url: "#",
    icon: "fab fa-twitter"
  },
  {
    name: "Instagram",
    url: "#", 
    icon: "fab fa-instagram"
  }
];

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];
