import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Code, Sparkles, Zap } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 morphing-bg">
      {/* 3D Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 floating-3d"
        animate={{ 
          y: [0, -30, 0],
          rotateX: [0, 360, 0],
          rotateY: [0, 180, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full premium-card flex items-center justify-center">
          <Code className="w-8 h-8 text-premium-primary" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-16 w-16 h-16 floating-3d"
        animate={{ 
          y: [0, 25, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-full h-full premium-card flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-premium-secondary" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-20 w-12 h-12 floating-3d"
        animate={{ 
          y: [0, -15, 0],
          rotateY: [0, -180, 0],
          rotateX: [0, 90, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        <div className="w-full h-full premium-card flex items-center justify-center">
          <Zap className="w-5 h-5 text-premium-accent" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Profile Image with 3D Effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="relative mx-auto w-40 h-40">
            <motion.div 
              className="w-full h-full premium-card rounded-full p-1 pulse-ring"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={personalInfo.image}
                alt={`${personalInfo.name} - Professional Developer Portrait`}
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 premium-card rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-4 h-4 text-premium-primary" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 inline-flex items-center px-4 py-2 premium-card rounded-full text-premium-accent text-sm font-medium"
          >
            <div className="w-2 h-2 bg-premium-accent rounded-full mr-2 pulse-ring" />
            {personalInfo.status}
          </motion.div>
        </motion.div>

        {/* Enhanced Main Heading with Shimmer Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-shimmer">HELLO!</span> <br />
          I'm a <span className="gradient-text text-shimmer">Software</span><br />
          <span className="gradient-text text-shimmer">Developer</span> based<br />
          in <span className="text-premium-accent">Haridwar</span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-premium-primary hover:bg-premium-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl premium-card border-0"
              size="lg"
            >
              HIRE ME
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-2 border-premium-secondary text-premium-secondary hover:bg-premium-secondary hover:text-white font-bold py-4 px-8 rounded-full transition-all premium-card"
              size="lg"
            >
              MY WORKS
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 text-muted-foreground"
        >
          <motion.div 
            className="flex items-center gap-2 premium-card px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={16} className="text-premium-primary" />
            <span>{personalInfo.email}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 premium-card px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={16} className="text-premium-secondary" />
            <span>{personalInfo.phone}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 premium-card px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={16} className="text-premium-accent" />
            <span>{personalInfo.location}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
