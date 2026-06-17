"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const typingWords = [
  "Electronics & Communication Engineer",
  "Embedded Systems Specialist",
  "IoT & Antenna Design Enthusiast",
  "Raspberry Pi Creator"
];

export default function Hero() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = typingWords[currentWordIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % typingWords.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden circuit-bg"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-cyan-500/20 w-fit mx-auto lg:mx-0 mb-6 text-sm text-cyan-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              ECE Student & Developer
            </div>

            {/* Title / Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit text-white tracking-tight mb-4 leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-purple-400">Arun Pranav SK</span>
            </h1>

            {/* Typing Subtitle */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
                I specialize in{" "}
                <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </p>
            </div>

            {/* Brief Introduction */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Electronics & Communication Engineering student passionate about embedded systems, IoT architecture, high-frequency antenna design, and smart automation.
            </p>

            {/* Meta Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-white/5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Tirupur, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-white/5">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+91 9626773060</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-primary to-purple-500 text-white font-semibold text-center hover:glow-cyan transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/arun_resume.pdf"
                download="Arun_Pranav_SK_Resume.pdf"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyan-300 font-semibold text-center backdrop-blur-sm transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5">
              <a
                href="https://github.com/ARUNPRANAV-SK"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 hover:glow-cyan transition-all transform hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/arunpranav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/40 border border-white/5 hover:border-purple-500/30 text-gray-400 hover:text-purple-400 hover:glow-purple transition-all transform hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:arunpranav.sk@gmail.com"
                className="p-3 rounded-full bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 hover:glow-cyan transition-all transform hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group">
              {/* Rotating Gradient Background Border */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-primary to-purple-600 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              
              {/* Profile Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 shadow-2xl flex items-center justify-center">
                <Image
                  src="/profile_pic.jpg"
                  alt="Arun Pranav SK"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 352px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative engineering rings */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none -m-4 opacity-50 group-hover:opacity-80 group-hover:rotate-45 transition-all duration-1000"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#cyan-gradient)"
                  strokeWidth="0.5"
                  strokeDasharray="4 8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#purple-gradient)"
                  strokeWidth="0.25"
                />
                <defs>
                  <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
