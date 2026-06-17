"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle, Radio, HeartPulse, ShieldAlert, X, Calendar } from "lucide-react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  status: "Designed & Fabricated" | "Completed";
  timeline: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  color: string; // cyan, purple, blue, emerald
  image: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Compact Hexagonal Fractal Antenna (2.4 GHz)",
    subtitle: "High-Frequency Electromagnetics",
    status: "Designed & Fabricated",
    timeline: "2025 - May 2026",
    description: "A high-performance fractal antenna designed to optimize gain and bandwidth for 2.4 GHz ISM band applications using advanced geometry.",
    features: [
      "Designed and simulated using Ansys HFSS and Autodesk Fusion 360",
      "Utilized fractal geometry to achieve multi-band resonance and compact size",
      "Optimized radiation patterns, high-frequency bandwidth, and return loss",
      "Successfully fabricated and tested the physical prototype to match simulation results"
    ],
    technologies: ["Ansys HFSS", "Fusion 360", "Antenna Fabrication", "Electromagnetics"],
    icon: <Radio className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300",
    image: "/images/antenna.png"
  },
  {
    id: 2,
    title: "Patient Monitoring System Using Raspberry Pi",
    subtitle: "Healthcare IoT & Automation",
    status: "Completed",
    timeline: "Aug 2024 - May 2025",
    description: "An automated real-time health-tracking system designed to monitor key vitals and transmit alerts during medical emergencies.",
    features: [
      "Monitors real-time heart rate, body temperature, and oxygen saturation (SpO2)",
      "Built with a Raspberry Pi microcomputer and integrated medical sensors",
      "Configured GSM alert module to send instant SMS warnings to doctors/relatives",
      "Created a simple local dashboard for continuous healthcare logging and tracking"
    ],
    technologies: ["Raspberry Pi", "GSM Module", "Sensors", "Python", "IoT Systems"],
    icon: <HeartPulse className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-300",
    image: "/images/patient_monitoring.png"
  },
  {
    id: 3,
    title: "Smoke Detector System",
    subtitle: "Safety & Warning Systems",
    status: "Completed",
    timeline: "Sep 2023 - Jun 2024",
    description: "A microcontroller-based home safety and alert system that detects smoke particles and triggers alarms to prevent fire hazards.",
    features: [
      "Configured gas and smoke sensors to detect fine carbon and toxic gas particles",
      "Designed and programmed alarm trigger thresholds with a micro-controller unit",
      "Integrated audio buzzer indicators and status LEDs for direct threat warnings",
      "Optimized circuit design to minimize power consumption for battery-powered operation"
    ],
    technologies: ["Microcontrollers", "Gas Sensors", "Analog Circuits", "Hardware Assembly"],
    icon: <ShieldAlert className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
    image: "/images/smoke_detector.png"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glowing orb */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card flex flex-col justify-between rounded-2xl overflow-hidden border border-white/5 hover:glass-card-hover cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 p-2.5 rounded-lg bg-slate-900/80 border border-white/10 backdrop-blur-sm">
                  {project.icon}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Status & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold border uppercase tracking-wider ${project.color}`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-600" />
                      {project.timeline}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-bold font-outfit text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/80 mb-3">{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies & Details Action */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-slate-900/40 border border-white/5 text-gray-400">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900/40 border border-white/5 text-cyan-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors w-fit">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden border border-white/10 z-10 max-h-[85vh] overflow-y-auto bg-slate-950"
              >
                {/* Modal Banner Image */}
                <div className="relative h-56 sm:h-64 w-full bg-slate-900 border-b border-white/5">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-white/10 text-gray-400 hover:text-white transition-colors backdrop-blur-sm border border-white/5"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 p-3 rounded-xl bg-slate-900 border border-white/10 backdrop-blur-sm">
                    {selectedProject.icon}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white pr-8">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 mt-1">{selectedProject.subtitle}</p>
                  </div>

                  {/* Specs/Meta Grid */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/5 mb-6">
                    <div>
                      <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">Status</span>
                      <span className="text-sm font-semibold text-white">{selectedProject.status}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">Timeline</span>
                      <span className="text-sm font-semibold text-white">{selectedProject.timeline}</span>
                    </div>
                  </div>

                  {/* Specifications List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-3">
                      Project Specifications & Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies used */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-3">
                      Technologies Implemented
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-gray-300 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
