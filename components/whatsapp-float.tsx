"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/917358547421"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </motion.a>
  )
}
