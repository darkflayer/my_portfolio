import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-premium-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-premium-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl font-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="premium-card p-6 rounded-2xl"
              >
                <p>{personalInfo.about}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="premium-card p-6 rounded-2xl"
              >
                <p>
                  With experience in full-stack development, mobile applications, and emerging technologies, 
                  I bring a comprehensive approach to every project. I believe in writing clean, efficient 
                  code and creating user experiences that are both functional and delightful.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="premium-card p-6 rounded-2xl"
              >
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always eager to take on 
                  new challenges and grow both personally and professionally.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Badge variant="secondary" className="bg-premium-primary/10 text-premium-primary border-premium-primary/20 px-4 py-2 rounded-full hover:bg-premium-primary/20 transition-all">
                Problem Solver
              </Badge>
              <Badge variant="secondary" className="bg-premium-secondary/10 text-premium-secondary border-premium-secondary/20 px-4 py-2 rounded-full hover:bg-premium-secondary/20 transition-all">
                Team Player
              </Badge>
              <Badge variant="secondary" className="bg-premium-accent/10 text-premium-accent border-premium-accent/20 px-4 py-2 rounded-full hover:bg-premium-accent/20 transition-all">
                Quick Learner
              </Badge>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="premium-card p-1 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern developer workspace with multiple monitors and code"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 premium-card bg-premium-primary text-white p-6 rounded-xl font-bold shadow-xl floating-3d"
            >
              <div className="text-3xl font-black">4+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </motion.div>
            
            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 premium-card rounded-full flex items-center justify-center floating-3d"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fab fa-react text-premium-secondary text-xl"></i>
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-4 w-10 h-10 premium-card rounded-full flex items-center justify-center floating-3d"
              animate={{ 
                x: [0, 10, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <i className="fab fa-node-js text-premium-accent text-lg"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
