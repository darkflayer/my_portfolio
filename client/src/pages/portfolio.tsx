import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/constants";

export default function Portfolio() {
  const iconClassMap = {
    "fab fa-linkedin": "linkedin",
    "fab fa-github": "github", 
    "fab fa-twitter": "twitter",
    "fab fa-instagram": "instagram"
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-4">
                {personalInfo.name.toUpperCase()}
              </div>
              <p className="text-gray-400 mb-6">{personalInfo.title} & Tech Enthusiast</p>
              
              <div className="flex justify-center space-x-6 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
              
              <div className="text-gray-500 text-sm">
                © 2025 {personalInfo.name}. All rights reserved. | Designed & Developed with ❤️
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
}
