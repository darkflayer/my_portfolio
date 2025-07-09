import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-[#F59E0B]" />

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
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-black shadow-lg" />
                
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                }`}>
                  <div className="bg-gray-800/50 p-6 rounded-xl card-hover border border-gray-700 backdrop-blur-sm">
                    <div className="text-[#F59E0B] font-bold mb-2 text-sm uppercase tracking-wide">
                      {experience.type}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <div className="text-[#F59E0B] font-semibold mb-2">{experience.company}</div>
                    <div className="text-gray-400 mb-4 text-sm">{experience.period}</div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
