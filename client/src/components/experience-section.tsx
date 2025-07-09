import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-40 w-80 h-80 bg-premium-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-premium-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-premium-primary to-premium-secondary" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-premium-primary rounded-full border-4 border-background shadow-lg floating-3d" />
                
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                }`}>
                  <motion.div 
                    className="premium-card p-6 rounded-xl hover:scale-105 transition-all duration-300 floating-3d"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-premium-primary font-bold mb-2 text-sm uppercase tracking-wide">
                      {experience.type}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <div className="text-premium-secondary font-semibold mb-2">{experience.company}</div>
                    <div className="text-muted-foreground mb-4 text-sm">{experience.period}</div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-premium-accent/10 text-premium-accent border-premium-accent/20 text-xs hover:bg-premium-accent/20 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
