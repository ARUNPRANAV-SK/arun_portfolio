"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";

type TimelineItem = {
  type: "education" | "internship";
  title: string;
  subtitle: string;
  location: string;
  date: string;
  details: string[];
  metric?: string; // CGPA or percentage
};

const timelineData: TimelineItem[] = [
  {
    type: "internship",
    title: "Robomiracle Technologies Pvt Ltd",
    subtitle: "Technical Intern",
    location: "Coimbatore, India",
    date: "June 2025 (15 Days)",
    details: [
      "Gained hands-on experience in real-time technical hardware/software applications and industrial systems development.",
      "Collaborated in teams to solve practical engineering and project workflow issues.",
      "Strengthened problem-solving abilities and understood hardware testing workflows.",
    ],
  },
  {
    type: "education",
    title: "Dr. N.G.P Institute of Technology",
    subtitle: "Bachelor of Engineering in Electronics & Communication Engineering (B.E. ECE)",
    location: "Coimbatore, Tamil Nadu",
    date: "2023 - 2027",
    metric: "CGPA: 7.54",
    details: [
      "Acquired comprehensive engineering knowledge in microprocessors, networks, and advanced electronics.",
      "Actively developing practical ECE projects in IoT automation and antenna designs.",
    ],
  },
  {
    type: "education",
    title: "Sakthi Vigneshwara Kalvi Nilayam",
    subtitle: "Higher Secondary Education (SSLC / HSC)",
    location: "Tirupur, Tamil Nadu",
    date: "2021 - 2023",
    metric: "Percentage: 79.5%",
    details: [
      "Completed secondary education with focused coursework in Mathematics, Physics, and Chemistry.",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background glowing orb */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-outfit text-white"
          >
            Education & <span className="text-purple-400">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          
          {/* Neon vertical pulsing light line overlay */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-primary to-purple-600 shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse" />

          {timelineData.map((item, index) => {
            const isInternship = item.type === "internship";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node Icon Indicator */}
                <span className="absolute -left-[38px] sm:-left-[46px] top-1 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950 border-2 border-cyan-400 hover:border-purple-400 transition-colors z-10 glow-cyan">
                  {isInternship ? (
                    <Briefcase className="w-4.5 h-4.5 text-cyan-400" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  )}
                </span>

                {/* Card Container */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl hover:glass-card-hover border border-white/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      {/* Title & Badge */}
                      <h3 className="text-xl font-bold font-outfit text-white flex flex-wrap items-center gap-3">
                        {item.title}
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                            isInternship
                              ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                              : "bg-purple-500/10 border-purple-500/20 text-purple-300"
                          }`}
                        >
                          {isInternship ? "Internship" : "Education"}
                        </span>
                      </h3>
                      <p className="text-gray-300 font-medium text-sm mt-1">{item.subtitle}</p>
                    </div>

                    {/* Timeline Date & Location */}
                    <div className="flex flex-col sm:items-end text-sm text-gray-400">
                      <div className="flex items-center gap-1.5 font-medium text-cyan-300">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* CGPA / Percentage Metrics */}
                  {item.metric && (
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-slate-900/60 border border-white/5 text-sm font-semibold text-white">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>{item.metric}</span>
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-gray-400 text-sm sm:text-base leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
