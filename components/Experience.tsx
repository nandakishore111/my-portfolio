"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6
                 bg-gradient-to-br from-gray-900 via-zinc-900 to-black
                 text-white"
    >
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        {/* Internships */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-1">Azure DevOps Intern — Swaddler Swift</h3>
            <p className="text-gray-400 text-sm mb-1">May 2025 – July 2025</p>
            <ul className="text-gray-400 text-sm list-disc list-inside">
              <li>Supported DevOps team maintaining Azure DevOps Boards and Git Repos.</li>
              <li>Assisted in project migration and documenting workflows, configurations, deployments.</li>
              <li>Collaborated on pipeline automation to reduce manual work.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-1">AWS DevOps Intern — MonoSpace</h3>
            <p className="text-gray-400 text-sm mb-1">Feb 2025 – Apr 2025</p>
            <ul className="text-gray-400 text-sm list-disc list-inside">
              <li>Deployed and managed internal applications on AWS (EC2, S3, IAM).</li>
              <li>Built CI/CD pipelines using Jenkins for automated deployments.</li>
              <li>Containerized applications with Docker and integrated SonarQube for static code analysis.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
