import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Floating Code Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 text-6xl text-[#F59E0B]/20"
      >
        💻
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-10 text-4xl text-[#3B82F6]/20"
      >
        🚀
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={personalInfo.image}
            alt={`${personalInfo.name} - Professional Developer Portrait`}
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#F59E0B] shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            {personalInfo.status}
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          HELLO! <br />
          I'm a <span className="gradient-text">Software</span><br />
          <span className="gradient-text">Developer</span> based<br />
          in Haridwar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            size="lg"
          >
            HIRE ME
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            className="border-2 border-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105"
            size="lg"
          >
            MY WORKS
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
