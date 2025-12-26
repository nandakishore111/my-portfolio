"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-cyan-400 font-semibold tracking-wide mb-2">
            👋 Hello, I’m
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Nanda Kishore <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DevOps Engineer
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-xl">
            DevOps Enthusiastic with hands-on experience in 
            <span className="text-white font-medium"> AWS, Azure DevOps, CI/CD, Docker </span>
            and automation. Passionate about building scalable and reliable systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              📄 View Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition"
            >
              📬 Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

