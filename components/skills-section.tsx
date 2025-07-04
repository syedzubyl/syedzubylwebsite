"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Globe, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", icon: "☕", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400" },
      { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" },
      {
        name: "JavaScript",
        icon: "🟨",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      },
      { name: "Dart", icon: "🎯", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: "💙", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" },
      { name: "React Native", icon: "⚛️", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400" },
      {
        name: "Android SDK",
        icon: "🤖",
        color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" },
      {
        name: "Firebase",
        icon: "🔥",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      },
      {
        name: "Supabase",
        icon: "⚡",
        color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
      },
      { name: "MySQL", icon: "🐬", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React.js", icon: "⚛️", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400" },
      { name: "Next.js", icon: "▲", color: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400" },
      {
        name: "RESTful APIs",
        icon: "🔗",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      },
    ],
  },
  {
    title: "Tools & Design",
    icon: Palette,
    skills: [
      { name: "Git", icon: "🌿", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400" },
      { name: "Figma", icon: "🎨", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400" },
      {
        name: "Postman",
        icon: "📮",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      },
      {
        name: "AI Tools",
        icon: "🤖",
        color: "bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-400",
      },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build amazing applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform">
                      <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          className={`${skill.color} px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium cursor-default transition-all duration-200 hover:shadow-md`}
                        >
                          <span className="mr-2">{skill.icon}</span>
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
