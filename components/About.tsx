"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6
                 bg-gradient-to-br from-black via-zinc-900 to-gray-900
                 text-white"
    >
      <div className="max-w-4xl text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          I am a <span className="text-white font-semibold">DevOps Engineer</span> with
          hands-on experience in cloud platforms, CI/CD automation, containerization,
          and monitoring. I enjoy building scalable infrastructure, automating
          workflows, and improving system reliability through modern DevOps practices.
        </motion.p>

      </div>
    </section>
  );
}
