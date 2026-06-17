"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Presentation, Settings, CheckCircle2 } from "lucide-react";

type Certification = {
  title: string;
  provider: string;
  badgeColor: string; // Tailwind color classes
};

type Workshop = {
  title: string;
  organizer: string;
};

type Achievement = {
  title: string;
  event: string;
  description: string;
};

const certificationsList: Certification[] = [
  { title: "Introduction to IoT 4.0", provider: "NPTEL", badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" },
  { title: "Analog Electronics", provider: "Udemy", badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/5" },
  { title: "Cloud Digital Leader", provider: "Google Cloud Certifications", badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/5" },
  { title: "Technology Associate", provider: "Microsoft Certifications", badgeColor: "border-teal-500/30 text-teal-400 bg-teal-500/5" },
  { title: "MATLAB & Simulink Core", provider: "MathWorks Certifications", badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/5" },
  { title: "Robotic Process Automation", provider: "UiPath Certifications", badgeColor: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
  { title: "Developer Associate", provider: "MongoDB Certifications", badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
  { title: "Bentley Systems Core", provider: "Bentley Certifications", badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
  { title: "Career Path Credentials", provider: "Great Learning Certifications", badgeColor: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
];

const workshopsList: Workshop[] = [
  { title: "NextGen AI/ML in IoT", organizer: "IIT Palakkad" },
  { title: "IoT with Raspberry Pi", organizer: "Sri Krishna College of Technology" },
  { title: "Circuit Voyage", organizer: "Sri Krishna College of Technology" },
];

const achievementsList: Achievement[] = [
  {
    title: "National Paper Presentation",
    event: "INFERIX'24 at BIT (Bannari Amman Institute of Technology)",
    description: "Presented a technical paper detailing advanced systems engineering and circuit optimization at the National Level Symposium.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            Certifications & <span className="text-cyan-400">Workshops</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Certifications Grid */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold font-outfit text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              Credentials & Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificationsList.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-5 rounded-xl border border-white/5 hover:glass-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2.5 mb-3">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 border rounded-md uppercase tracking-wider w-fit ${cert.badgeColor}`}>
                    {cert.provider}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Workshops & Achievements */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Workshops */}
            <div>
              <h3 className="text-xl font-bold font-outfit text-white flex items-center gap-2 mb-6">
                <Settings className="w-5 h-5 text-purple-400" />
                Technical Workshops
              </h3>
              
              <div className="space-y-4">
                {workshopsList.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-5 rounded-xl border border-white/5 hover:glass-card-hover transition-all"
                  >
                    <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      {workshop.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-semibold">{workshop.organizer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-bold font-outfit text-white flex items-center gap-2 mb-6">
                <Presentation className="w-5 h-5 text-cyan-400" />
                Key Achievements
              </h3>
              
              <div className="space-y-4">
                {achievementsList.map((ach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-5 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-transparent hover:glass-card-hover transition-all"
                  >
                    <h4 className="text-sm font-bold text-white mb-1.5">{ach.title}</h4>
                    <p className="text-xs text-cyan-300 font-semibold mb-2">{ach.event}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{ach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
