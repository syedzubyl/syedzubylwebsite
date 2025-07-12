"use client";
import React from "react";

const certifications = [
  {
    icon: "🏆",
    title: "Accenture Software Engineering Job Simulation",
    platform: "Forage",
    date: "July 8, 2025",
    skills: ["Architecture", "Security", "Programming", "Testing", "Agile"],
  },
  {
    icon: "🎤",
    title: "Paper Presentation – Ethiraj College",
    award: "2nd Prize (National Level)",
    topic: "Campus Geo-Location Attendance & Clubs Management System (IoT, Cloud, HCI)",
  },
  {
    icon: "🎨",
    title: "Create a Mockup in Figma – UI Design Fundamentals",
    platform: "Self-paced Course",
    tools: ["Figma"],
    skills: ["Wireframing", "Prototyping", "UI Design", "Component Handling"],
  },
  {
    icon: "🗃️",
    title: "Access SQLite in Android Studio – Course Project",
    by: "Project Networks",
    stack: ["Java", "SQLite"],
    skills: ["Android Local Storage", "SQL Integration", "Data Handling"],
  },
  {
    icon: "💻",
    title: "Core Java Programming",
    by: "Great Learning",
    skills: ["Object-Oriented Programming", "Java Syntax", "Control Flow", "Loops"],
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Animated background shape */}
      <div className="animated-bg-shape w-80 h-80 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 left-1/4 top-0 absolute" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-10">
          Recognitions, awards, and credentials that showcase my skills and learning journey.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl shadow-xl flex flex-col gap-3 items-start hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{cert.icon}</div>
              <div className="font-semibold text-lg text-gray-900 dark:text-white">{cert.title}</div>
              {cert.platform && (
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{cert.platform}</div>
              )}
              {cert.date && (
                <div className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</div>
              )}
              {cert.award && (
                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">{cert.award}</div>
              )}
              {cert.topic && (
                <div className="text-xs text-gray-700 dark:text-gray-300">{cert.topic}</div>
              )}
              {cert.tools && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Tools:</span> {cert.tools.join(", ")}
                </div>
              )}
              {cert.stack && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Stack:</span> {cert.stack.join(", ")}
                </div>
              )}
              {cert.by && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">By:</span> {cert.by}
                </div>
              )}
              {cert.skills && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 