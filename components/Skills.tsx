"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "AWS",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "CI/CD Automation",
    "Jenkins",
    "Git & GitHub",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Linux Administration",
    "Python",
    "Bash / Shell Scripting",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Monitoring & Logging",
    "Automation",
  ];

  // Split skills into 3 roughly equal rows
  const rowCount = 3;
  const rows: string[][] = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push(skills.filter((_, idx) => idx % rowCount === i));
  }

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6
                 bg-gradient-to-br from-gray-900 via-black to-gray-800
                 text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        My Skills
      </motion.h2>

      <div className="w-full space-y-4">
        {rows.map((rowSkills, rowIdx) => (
          <motion.div
            key={rowIdx}
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20 + rowIdx * 5, ease: "linear" }}
          >
            {rowSkills.concat(rowSkills).map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-700/40 px-4 py-2 rounded-lg shadow-md text-sm md:text-base font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
