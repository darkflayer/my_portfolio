import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {personalInfo.about}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With experience in full-stack development, mobile applications, and emerging technologies, 
                I bring a comprehensive approach to every project. I believe in writing clean, efficient 
                code and creating user experiences that are both functional and delightful.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always eager to take on 
                new challenges and grow both personally and professionally.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <span className="bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-2 rounded-full border border-[#F59E0B]/20">
                Problem Solver
              </span>
              <span className="bg-[#3B82F6]/10 text-[#3B82F6] px-4 py-2 rounded-full border border-[#3B82F6]/20">
                Team Player
              </span>
              <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20">
                Quick Learner
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with multiple monitors and code"
              className="rounded-2xl shadow-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-[#F59E0B] text-black p-6 rounded-xl font-bold shadow-xl"
            >
              <div className="text-3xl font-black">4+</div>
              <div className="text-sm">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
