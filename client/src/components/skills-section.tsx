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
          className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center"
        >
          {(() => {
            const iconData = [
              { class: "fab fa-react", color: "#61DAFB", name: "React" },
              { class: "fab fa-node-js", color: "#3C873A", name: "Node.js" },
              { class: "fab fa-python", color: "#3776AB", name: "Python" },
              { class: "fab fa-java", color: "#007396", name: "Java" },
              { class: "fab fa-js-square", color: "#F7DF1E", name: "JavaScript" },
              { class: "fab fa-html5", color: "#E34F26", name: "HTML5" },
              { class: "fab fa-css3-alt", color: "#1572B6", name: "CSS3" },
              { class: "fab fa-bootstrap", color: "#7952B3", name: "Bootstrap" },
              { class: "fab fa-git-alt", color: "#F05032", name: "Git" },
              { class: "fab fa-docker", color: "#2496ED", name: "Docker" },
              { class: "fas fa-database", color: "#4DB33D", name: "Database" },
              { class: "fas fa-cloud", color: "#00C3E2", name: "Cloud" },
              { class: "fas fa-fire", color: "#FFCA28", name: "Firebase" },
              { class: "fas fa-paper-plane", color: "#FF6F00", name: "API" },
              { class: "fas fa-code-branch", color: "#6e5494", name: "REST" },
              { class: "fab fa-aws", color: "#FF9900", name: "AWS" },
              { class: "fas fa-plug", color: "#4E8EE5", name: "WebSocket" }
            ];
            
            return iconData.map((icon, index) => (
            <motion.div
                key={icon.class}
              initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-150 group-hover:bg-gradient-to-br group-hover:border-opacity-50"
                  style={{ 
                    backgroundColor: `${icon.color}10`,
                    border: `1px solid ${icon.color}20`,
                    '--tw-gradient-from': `${icon.color}20`,
                    '--tw-gradient-to': `${icon.color}05`,
                    '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`,
                  } as React.CSSProperties}
                >
                  <i 
                    className={`${icon.class} text-2xl transition-transform duration-150 group-hover:scale-125`}
                    style={{ color: icon.color }}
                  ></i>
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-150">
                    {icon.name}
                  </span>
                </div>
            </motion.div>
            ));
          })()}
        </motion.div>
      </div>
    </section>
  );
}
