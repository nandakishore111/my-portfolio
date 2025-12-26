"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6
                 bg-gradient-to-br from-gray-800 via-black to-gray-900
                 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Contact info / links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl w-full text-center flex flex-col md:flex-row gap-4 justify-center"
      >
        <a
          href="mailto:thammineninandakishore@gmail.com"
          className="inline-block px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/t-nanda-kishore"
          target="_blank"
          className="inline-block px-6 py-3 rounded-full border border-gray-700 hover:border-gray-400 transition text-white"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/nandakishore111"
          target="_blank"
          className="inline-block px-6 py-3 rounded-full border border-gray-700 hover:border-gray-400 transition text-white"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
