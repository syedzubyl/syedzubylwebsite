"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  GraduationCap,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import AnimatedBackground from "@/components/animated-background"
import WhatsAppFloat from "@/components/whatsapp-float"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import GitHubSection from "@/components/github-section"
import LeetCodeSection from "@/components/leetcode-section"
import AnimatedAvatar from '@/components/cartoon-avatar'

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)
  const downloadResumePDF = () => {
    const link = document.createElement('a');
    link.href = '/syed_zubyl.pdf';
    link.download = 'Syed_Zubyl_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "dark bg-gray-900" : "bg-gray-50"} overflow-x-hidden`}>
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
          <motion.h1
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Syed Zubyl
          </motion.h1>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex gap-3 lg:gap-4">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors text-xs sm:text-sm lg:text-base ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
      >
        <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Avatar Image */}
            <div
                className="w-60 h-60 sm:w-96 sm:h-96 md:w-[20rem] md:h-[20rem] lg:w-[32rem] lg:h-[32rem] mx-auto mb-0 sm:mb-0 rounded-full border-4 border-purple-600 overflow-hidden flex items-center justify-center"
            >
              <AnimatedAvatar />
            </div>

            <h1 className="pt-0 pb-4 mb-1 sm:mb-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-tight">
              Syed Zubyl
            </h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 px-2 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Mobile App Developer & Full Stack Engineer
            </motion.p>

            <motion.div
              className="flex flex-row gap-3 w-full max-w-md mx-auto justify-center px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={downloadResumePDF}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Passionate and self-motivated MCA student with a strong foundation in mobile app development,
                    RESTful APIs, and cross-platform tools like React Native and Flutter. Proven ability to collaborate
                    in team environments, solve real-world problems, and deliver impactful projects.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-all">
                        syedzubyl96@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">+91 73585 47421</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">syedzubyl</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Measi Institute of Information Technology
                    </p>
                    <p className="text-xs sm:text-sm text-blue-600">CGPA: 8.2 | 2023-2025</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Dr MGR Educational And Research Institute
                    </p>
                    <p className="text-xs sm:text-sm text-blue-600">CGPA: 8.5 | 2020-2023</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* GitHub Section */}
      <GitHubSection />

      {/* LeetCode Section */}
      <LeetCodeSection />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              {
                "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!"
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <a
                      href="mailto:syedzubyl96@gmail.com"
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                    >
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-all">
                          syedzubyl96@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+917358547421"
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    >
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">+91 73585 47421</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/syed-zubyl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors group"
                    >
                      <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">LinkedIn</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">Quick Actions</h3>

                  <div className="space-y-4">
                    <Button
                      onClick={downloadResumePDF}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 sm:py-3 text-sm sm:text-base"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full py-2 sm:py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent text-sm sm:text-base"
                    >
                      <a href="https://wa.me/917358547421" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Me
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full py-2 sm:py-3 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white dark:border-gray-400 dark:text-gray-400 bg-transparent text-sm sm:text-base"
                    >
                      <a href="https://github.com/syedzubyl" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}
