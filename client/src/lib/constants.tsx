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
  image: "https://res.cloudinary.com/de7mvqfxv/image/upload/v1752090595/1000001925_ps6pks.jpg"
};

export const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    color: "text-[#F59E0B]",
    bgColor: "bg-[#F59E0B]/10",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript/Typescript", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Bootstrap", level: 88 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    icon: Database,
    color: "text-[#3B82F6]",
    bgColor: "bg-[#3B82F6]/10",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Django", level: 85 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "REST APIs", level: 92 }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: Code,
    color: "text-[#10B981]",
    bgColor: "bg-[#10B981]/10",
    skills: [
      { name: "MongoDB / Atlas", level: 90 },
      { name: "MySQL / SQLite", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase / Firestore", level: 70 },
      { name: "Supabase", level: 68 },
      { name: "Cloudinary", level: 88 }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: Code,
    color: "text-[#8B5CF6]",
    bgColor: "bg-[#8B5CF6]/10",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Render / Netlify / Vercel", level: 85 },
      { name: "Socket.IO / WebSockets", level: 82 },
      { name: "Docker", level: 70 }
    ]
  }
];

export const projects = [
  {
    title: "Flip-Shop E-Commerce Platform",
    description: "A full-stack e-commerce site with Razorpay payment integration, user authentication, admin dashboard with real-time analytics for users, products, sales, and low stock. Built with Node.js, Express, MongoDB Atlas, and Bootstrap, deployed on Render.",
    image: "https://res.cloudinary.com/de7mvqfxv/image/upload/v1752078666/Screenshot_1321_udbght.png",
    technologies: ["Node.js", "Express", "MongoDB Atlas", "Razorpay", "Bootstrap", "Render"],
    liveDemo: "https://flip-shop.onrender.com/",
    github: "https://github.com/darkflayer/flip-shop",
    featured: true
  },
  {
    title: "Abhaya-News Portal",
    description: "A dynamic news website built for a client during an internship, featuring an admin panel to upload news articles with images (stored on Cloudinary) and featured videos for the news channel. Developed with Node.js, Express, and MongoDB, using a static frontend and deployed on Render (backend) and Netlify (frontend).",
    image: "https://res.cloudinary.com/de7mvqfxv/image/upload/v1752079232/Screenshot_1324_gpdlpq.png",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "Render", "Netlify"],
    liveDemo: "https://abhaya-news.netlify.app/",
    github: "https://github.com/darkflayer/abhaya-news-backend",
    featured: true
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "A full-stack, real-time analytics platform showcasing advanced data pipelines: capturing high-volume events via REST API, processing with MongoDB Aggregation, and pushing live updates to a Chart.js dashboard using Socket.IO. Built to handle large data volumes and real-time communications efficiently.",
    image: "https://res.cloudinary.com/de7mvqfxv/image/upload/v1752079802/Screenshot_1210_mb8hvr.png",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.IO", "Chart.js", "HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://github.com/darkflayer/real-time-analytics-dashboard.git",
    github: "https://github.com/darkflayer/real-time-analytics-dashboard.git",
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
  }
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Farmicon (TIDE Incubator, IIT Roorkee)",
    period: "June 2025 - August 2025",
    description: "Working on-site at IIT Roorkee under the TIDE incubator, developing multiple full-stack projects from scratch for Farmicon. Contributing to end-to-end system design, implementation, and deployment while gaining hands-on experience with modern development stacks and industry practices.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Django", "REST APIs", "Cloud Deployment"],
    type: "internship"
  }
  ,
  
  {
    title: "Full Stack Developer Intern",
    company: "Creomind Innovations Pvt. Ltd.",
    period: "April 2025 - May 2025",
    description: "Delivered full-stack projects like the Abhaya-News portal, developing robust admin panels, integrating media storage with Cloudinary, and deploying applications on Render and Netlify. Focused on building scalable APIs and dynamic frontend interfaces while collaborating closely with the client's team.",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "Netlify", "Render"],
    type: "internship"
  },{
    title: "Software Development Intern",
    company: "Tech Innovations Ltd.",
    period: "June 2024 - August 2024",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase for better performance.",
    technologies: ["React", "Node.js", "MongoDB"],
    type: "internship"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hemant-singh-b48815239/",
    icon: "fab fa-linkedin"
  },
  {
    name: "GitHub", 
    url: "https://github.com/darkflayer",
    icon: "fab fa-github"
  },
  {
    name: "Twitter",
    url: "https://x.com/HemantSingh7474",
    icon: "fab fa-twitter"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hemu_rautan/", 
    icon: "fab fa-instagram"
  }
];

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
