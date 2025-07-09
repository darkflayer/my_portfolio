import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, index) => {
            const IconComponent = skillCategory.icon;
            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-xl card-hover border border-gray-700 backdrop-blur-sm"
              >
                <div className={`${skillCategory.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`${skillCategory.color} w-8 h-8`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{skillCategory.category}</h3>
                
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-700"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center opacity-60"
        >
          {[
            "fab fa-react",
            "fab fa-node-js", 
            "fab fa-python",
            "fab fa-java",
            "fab fa-js-square",
            "fab fa-html5",
            "fab fa-css3-alt",
            "fab fa-git-alt"
          ].map((iconClass, index) => (
            <motion.div
              key={iconClass}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1, color: "#F59E0B" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-4xl hover:text-[#F59E0B] transition-all cursor-pointer"
            >
              <i className={iconClass}></i>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
