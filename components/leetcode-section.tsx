"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Trophy, Target, Zap, TrendingUp, Code2, CheckCircle } from "lucide-react"

const leetcodeStats = [
  { label: "Problems Solved", value: "150+", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
  { label: "Contest Rating", value: "1450+", icon: Trophy, color: "from-yellow-500 to-orange-500" },
  { label: "Easy Problems", value: "80+", icon: Target, color: "from-green-400 to-green-600" },
  { label: "Medium Problems", value: "60+", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { label: "Hard Problems", value: "10+", icon: TrendingUp, color: "from-red-500 to-pink-500" },
  { label: "Streak Days", value: "45+", icon: Code2, color: "from-blue-500 to-purple-500" },
]

const recentAchievements = [
  {
    title: "Contest Participant",
    description: "Regularly participates in weekly contests",
    badge: "Active",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    title: "Problem Solver",
    description: "Solved 150+ algorithmic problems",
    badge: "Achiever",
    color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  },
  {
    title: "Consistent Coder",
    description: "Maintained coding streak for 45+ days",
    badge: "Dedicated",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  },
]

const skillAreas = [
  { name: "Arrays & Strings", progress: 85, color: "bg-blue-500" },
  { name: "Dynamic Programming", progress: 70, color: "bg-green-500" },
  { name: "Trees & Graphs", progress: 75, color: "bg-purple-500" },
  { name: "Sorting & Searching", progress: 90, color: "bg-yellow-500" },
  { name: "Linked Lists", progress: 80, color: "bg-pink-500" },
  { name: "Stack & Queue", progress: 85, color: "bg-indigo-500" },
]

export default function LeetCodeSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">LeetCode Progress</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Track my algorithmic problem-solving journey and competitive programming achievements.
          </p>
        </motion.div>

        {/* LeetCode Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {leetcodeStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Code2 className="h-6 w-6 text-blue-600" />
            Problem-Solving Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skillAreas.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Trophy className="h-6 w-6 text-blue-600" />
            Recent Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {recentAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                    <Badge className={achievement.color}>{achievement.badge}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LeetCode Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="inline-block bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <Code2 className="h-8 w-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">@syedzubyl</h3>
                  <p className="text-gray-600 dark:text-gray-400">LeetCode Profile</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3"
              >
                <a href="https://leetcode.com/syedzubyl" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View LeetCode Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
