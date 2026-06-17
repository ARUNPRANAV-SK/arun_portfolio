"use client";

import React from "react";
import { ArrowUp, Cpu } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-dark-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2 font-bold font-outfit text-white">
            <div className="p-1 rounded bg-gradient-to-br from-cyan-500 to-purple-500">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span>
              ARUN <span className="text-cyan-400 font-normal">PRANAV</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Arun Pranav SK. All Rights Reserved. Designed with engineering precision.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:glow-cyan transition-all transform hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
