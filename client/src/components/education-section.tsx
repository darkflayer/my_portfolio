import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = {
  current: {
    degree: "Bachelor of Technology in Computer Science Engineering",
    university: "College Of Engineering Roorkee",
    location: "Roorkee, Uttarakhand, India",
    duration: "2022 - 2026",
    description: "Pursuing a comprehensive computer science curriculum with focus on software development, algorithms, and modern technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Web Development & Design",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "Machine Learning Fundamentals"
    ],
    achievements: [
      "Active member of coding clubs and technical societies",
      "Participated in various hackathons and coding competitions",
      "Completed multiple online certifications alongside studies"
    ]
  },
  class12: {
    school: "Police Modern Senior Secondary School",
    location: "Haridwar, Uttrakhand, India",
    percentage: "84%",
    year: "2021",
    board: "CBSE/State Board"
  },
  class10: {
    school: "Police Modern Senior Secondary School", 
    location: "Haridwar, Uttrakhand, India",
    percentage: "88%",
    year: "2019",
    board: "CBSE/State Board"
  }
};

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Current Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="transition-all duration-150"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full card-hover education-card-orange cursor-pointer group">
              <CardHeader>
                                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-all duration-150">
                      <GraduationCap className="text-[#F59E0B] w-6 h-6 group-hover:scale-110 transition-transform duration-150" />
                    </div>
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#F59E0B] transition-colors duration-150">Current Education</CardTitle>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-150">Bachelor's Degree</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {educationData.current.degree}
                  </h3>
                  <p className="text-[#F59E0B] font-semibold text-base">
                    {educationData.current.university}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#F59E0B]" />
                    <span>{educationData.current.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F59E0B]" />
                    <span>{educationData.current.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {educationData.current.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Class 12 Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6}}
            viewport={{ once: true }}
            className="transition-all duration-150"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full card-hover education-card-blue cursor-pointer group">
              <CardHeader>
                                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-150">
                      <Award className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform duration-150" />
                    </div>
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-150">Class XII</CardTitle>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-150">Higher Secondary</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {educationData.class12.board}
                  </h3>
                  <p className="text-blue-400 font-semibold text-base">
                    {educationData.class12.school}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{educationData.class12.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{educationData.class12.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>{educationData.class12.percentage}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Class 10 Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="transition-all duration-150"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full card-hover education-card-green cursor-pointer group">
              <CardHeader>
                                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-150">
                      <Award className="text-green-400 w-6 h-6 group-hover:scale-110 transition-transform duration-150" />
                    </div>
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-green-400 transition-colors duration-150">Class X</CardTitle>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-150">Secondary</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {educationData.class10.board}
                  </h3>
                  <p className="text-green-400 font-semibold text-base">
                    {educationData.class10.school}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span>{educationData.class10.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{educationData.class10.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-400" />
                    <span>{educationData.class10.percentage}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Coursework & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Coursework */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <span className="text-[#F59E0B]">📚</span>
                Key Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {educationData.current.coursework.map((course: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                      <span className="text-sm">{course}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <span className="text-[#F59E0B]">🏆</span>
                Academic Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {educationData.current.achievements.map((achievement: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-[#F59E0B]/10 to-red-500/10 border-[#F59E0B]/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-3">
                  Expected Graduation: 2026
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Currently in final year with focus on advanced software development and emerging technologies.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30">
                    Final Year
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Active Student
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
