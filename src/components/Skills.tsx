"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Wrench, Users, CheckCircle2 } from "lucide-react";

type Skill = {
  name: string;
  level: number; // percentage (0 - 100)
};

type SkillCategories = {
  technical: Skill[];
  tools: Skill[];
  soft: Skill[];
};

const skillsData: SkillCategories = {
  technical: [
    { name: "Embedded Systems", level: 90 },
    { name: "IoT (Internet of Things)", level: 92 },
    { name: "Raspberry Pi Hardware", level: 88 },
    { name: "Microcontrollers (8051, 8086, ARM)", level: 85 },
    { name: "Analog Electronics", level: 82 },
    { name: "Digital Electronics", level: 84 },
    { name: "Network Theory", level: 78 },
    { name: "GSM Communication", level: 80 },
    { name: "C Programming (Basic)", level: 72 },
  ],
  tools: [
    { name: "Ansys HFSS", level: 88 },
    { name: "Fusion 360", level: 82 },
    { name: "SolidWorks", level: 78 },
    { name: "MATLAB", level: 80 },
  ],
  soft: [
    { name: "Problem Solving", level: 92 },
    { name: "Quick Learner", level: 94 },
    { name: "Adaptability", level: 90 },
    { name: "Leadership", level: 88 },
    { name: "Teamwork", level: 92 },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<keyof SkillCategories>("technical");

  const tabs = [
    { id: "technical", name: "Technical Skills", icon: <Cpu className="w-4 h-4" /> },
    { id: "tools", name: "Software & Tools", icon: <Wrench className="w-4 h-4" /> },
    { id: "soft", name: "Soft Skills", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glowing orb */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-full bg-slate-900/60 border border-white/5 backdrop-blur-md">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as keyof SkillCategories)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-t border-cyan-500/30 border-b border-purple-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {skillsData[activeTab].map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:glass-card-hover group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-gray-200 group-hover:text-white flex items-center gap-2 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
