"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Target, Award, BookOpen } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: "Career Goal",
      text: "Seeking opportunities to enhance skills, contribute to impactful projects, and grow as a competent and innovative engineer.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Core Interests",
      text: "Passionate about Embedded Systems, IoT architecture, high-frequency Antenna Design, and Raspberry Pi automation.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Education",
      text: "Pursuing B.E. in Electronics & Communication Engineering (2023 - 2027) with a current CGPA of 7.54.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-outfit text-white"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/10 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Who I Am
              </h3>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                I am a motivated **Electronics and Communication Engineering (ECE)** student at **Dr. N.G.P Institute of Technology**, deeply passionate about emerging technologies, embedded platforms, and innovative hardware-software solutions.
              </p>
              
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                My interest lies in bridging the gap between digital processing and real-world physical systems. I enjoy hands-on project development, continuous learning, and solving complex, real-world engineering problems using tools like Ansys HFSS, MATLAB, SolidWorks, and Raspberry Pi.
              </p>
              
              <p className="text-gray-400 text-base leading-relaxed">
                I thrive in teamwork-driven environments and actively seek practical experiences, which is reflected in my internship exposure and active participation in national symposiums.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:glass-card-hover transition-all duration-300 transform hover:-translate-x-1"
              >
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-outfit text-white mb-2">{card.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
