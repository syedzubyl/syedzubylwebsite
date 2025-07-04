"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, ExternalLink, Calendar, Code } from "lucide-react"

const githubStats = [
  { label: "Public Repositories", value: "25+", icon: Code },
  { label: "Total Stars", value: "50+", icon: Star },
  { label: "Forks", value: "15+", icon: GitFork },
  { label: "Contributions", value: "200+", icon: Calendar },
]

const featuredRepos = [
  {
    name: "Donation-App",
    description: "Cross-platform Flutter app for food and blood donation connecting donors with NGOs",
    language: "Dart",
    stars: 12,
    forks: 5,
    topics: ["flutter", "firebase", "donation", "mobile-app"],
  },
  {
    name: "Brain-Games-Android",
    description: "Collection of cognitive and memory games built with Java and Firebase",
    language: "Java",
    stars: 8,
    forks: 3,
    topics: ["android", "java", "firebase", "games"],
  },
  {
    name: "Company-Website-NextJS",
    description: "Modern company website built with Next.js and Tailwind CSS",
    language: "TypeScript",
    stars: 15,
    forks: 7,
    topics: ["nextjs", "react", "tailwindcss", "website"],
  },
  {
    name: "React-Native-Onboarding",
    description: "Mobile onboarding app with authentication and payment integration",
    language: "TypeScript",
    stars: 20,
    forks: 8,
    topics: ["react-native", "typescript", "supabase", "mobile"],
  },
]

const languageColors: { [key: string]: string } = {
  Dart: "bg-cyan-500",
  Java: "bg-orange-500",
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-green-500",
}

export default function GitHubSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">GitHub Profile</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my open-source contributions and development journey on GitHub.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-3 sm:p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Repositories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Github className="h-6 w-6 text-blue-600" />
            Featured Repositories
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          <Github className="h-5 w-5" />
                          {repo.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{repo.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-500"}`}></div>
                        {repo.language}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {repo.forks}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {repo.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="inline-block bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                  <Github className="h-8 w-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">@syedzubyl</h3>
                  <p className="text-gray-600 dark:text-gray-400">Follow my coding journey</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-8 py-3"
              >
                <a href="https://github.com/syedzubyl" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
