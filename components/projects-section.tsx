"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Award, Clock, MapPin, Trophy, Zap } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Second Brain (Current Project)",
    description:
      "Developed a smart personal assistant system using React Native, Node.js, n8n, and LLM APIs (OpenAI/DeepSeek), integrated with Notion and GitHub for memory and automation. Implemented RAG pipelines, self-hosted LLMs (Ollama), and n8n flows for daily tasks. Focused on decentralization, real-time interaction, and personal data intelligence.",
    technologies: ["React Native", "Node.js", "n8n", "OpenAI", "DeepSeek", "Notion API", "GitHub API", "Ollama", "RAG"],
    date: "Present",
    type: "Personal Project",
    link: null,
    github: null,
    color: "from-purple-500 to-indigo-500",
    status: "In Progress",
  },
  {
    title: "Mairan Assistant",
    description:
      "Developed a smart personal assistant system with voice authentication, task reminders, app automation, and WhatsApp auto-reply capabilities. Integrated with Firebase for storage and utilized Google Speech-to-Text for voice processing.",
    technologies: ["React Native", "OpenAI API", "Node.js", "Firebase", "Google Speech-to-Text", "App Write", "Axios"],
    date: "June 2024 – Sep 2024",
    type: "Personal Project",
    link: null,
    github: null,
    color: "from-green-500 to-teal-500",
    status: "Completed",
  },
  {
    title: "Company Website – Sri Mutharamman Engineering",
    description:
      "Built using Next.js for server-side rendering and fast performance, with Tailwind CSS for clean, mobile-first UI. Integrated WhatsApp Business interaction for instant customer inquiries and support.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "WhatsApp API"],
    date: "June 2025",
    type: "Freelance Project",
    link: "https://www.srimutharammanengineering.com",
    github: null,
    color: "from-blue-500 to-cyan-500",
    status: "Live",
  },
  {
    title: "Donation App – Food & Blood Donation Platform",
    description:
      "Developed a cross-platform app connecting donors with NGOs and individuals in need. Implemented secure login/register with Firebase Auth and real-time updates via Firebase DB.",
    technologies: ["Flutter", "Firebase", "Cloud Messaging", "Authentication"],
    date: "February 2024",
    type: "Freelance Project",
    link: null,
    github: "https://github.com/syedzubyl/Donation",
    color: "from-green-500 to-emerald-500",
    status: "Completed",
  },
  {
    title: "Assorted Brain Games",
    description:
      "A collection of cognitive and memory games developed as a native Android app. Built using Java with Firebase Realtime Database, implementing live user authentication and login/register flows.",
    technologies: ["Java", "Firebase", "Android SDK", "Git"],
    date: "March 2023",
    type: "Final Year Project",
    link: null,
    github: "https://github.com/syedzubyl/Donation",
    color: "from-purple-500 to-pink-500",
    status: "Completed",
  },
  {
    title: "Mercantile Society Onboarding",
    description:
      "A scalable mobile ecosystem for investors and mercantile personnel to manage stock buying, investments, and financial operations securely. Led development on key modules including OTP-based login and Razorpay integration.",
    technologies: ["React Native", "Node.js", "TypeScript", "Supabase", "Razorpay"],
    date: "January 2025 - May 2025",
    type: "Internship Project",
    link: null,
    github: null,
    color: "from-orange-500 to-red-500",
    status: "Completed",
  },
]

const experience = [
  {
    title: "Application Developer Intern",
    company: "Measi Institute of Information Technology",
    duration: "January 2025 – May 2025",
    description:
      "Led development on mobile onboarding app with OTP-based login, role-based access, and Razorpay payment integration. Integrated document verification (OCR), certificate generation, and Supabase data management.",
    technologies: ["React Native", "Node.js", "TypeScript", "Supabase"],
    icon: Award,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Hackathon Participant - School of Design Thinking",
    company: "50 Hours Hackathon Challenge",
    duration: "March 2025",
    description:
      'Developed "One City, One Platform" - a unified civic app for disaster alerts and public services. Led React Native frontend development and RESTful API design. Delivered working MVP under tight deadlines.',
    technologies: ["React Native", "RESTful APIs", "Maps Integration"],
    icon: Clock,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Rural Development Concepts - MIT Research Park",
    company: "One Day Innovation Workshop",
    duration: "February 2025",
    description:
      "Developed innovative concepts for rural-based development solutions. Created Flutter applications with integrated databases and AI chatbots to address rural community needs and digital inclusion.",
    technologies: ["Flutter", "Database Design", "AI Chatbots", "Rural Tech"],
    icon: MapPin,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "National Level Paper Presentation",
    company: "Ethiraj College For Women",
    duration: "Sep 2023 – Nov 2023",
    description:
      "Presented an innovative system integrating geo-location technology for automated attendance tracking and club management, utilizing IoT, cloud computing, and human-computer interaction (HCI).",
    technologies: ["IoT", "Cloud Computing", "HCI", "Geo-location", "Attendance Systems"],
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
]

const statusColors = {
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  Completed: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  Live: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A comprehensive showcase of my professional journey, innovative projects, and technical achievements in
            mobile and web development.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Professional Experience & Achievements
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${exp.color} text-white group-hover:scale-110 transition-transform flex-shrink-0`}
                        >
                          <exp.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mt-1">
                            {exp.company}
                          </CardDescription>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Github className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                  <CardHeader className="p-4 sm:p-6">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-4`}></div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </CardTitle>
                          {project.status && (
                            <Badge
                              className={`${statusColors[project.status as keyof typeof statusColors]} text-xs flex-shrink-0`}
                            >
                              {project.status === "In Progress" && <Zap className="mr-1 h-3 w-3" />}
                              {project.status}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                          {project.type} • {project.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex-1 flex flex-col">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.link && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.status === "In Progress" && (
                        <Badge variant="outline" className="text-xs text-blue-600 border-blue-600">
                          <Zap className="mr-1 h-3 w-3" />
                          Active Development
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Key Achievements & Highlights
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">5c+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">National Award</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
