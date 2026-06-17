"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger confetti celebration!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"],
    });

    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset submit notification after 6 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glowing orb */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-outfit text-white mb-4">Contact Information</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Have an interesting project or career opportunity? Reach out directly via email, phone, or fill out the message form.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:arunpranav.sk@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5 group-hover:border-cyan-500/20 group-hover:glow-cyan transition-all">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Email Address</span>
                      <span className="text-sm font-semibold">arunpranav.sk@gmail.com</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919626773060"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5 group-hover:border-purple-500/20 group-hover:glow-purple transition-all">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Phone Number</span>
                      <span className="text-sm font-semibold">+91 9626773060</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Location</span>
                      <span className="text-sm font-semibold">Tirupur, Tamil Nadu, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-12 pt-6 border-t border-white/5">
                <span className="text-xs text-gray-500 block mb-4 uppercase font-bold tracking-wider">Follow Me</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/ARUNPRANAV-SK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:glow-cyan transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/arunpranav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-purple-500/20 text-gray-400 hover:text-purple-400 hover:glow-purple transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col h-full justify-between">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-cyan-500/50 focus:glow-cyan text-white text-sm outline-none transition-all placeholder:text-gray-650"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-cyan-500/50 focus:glow-cyan text-white text-sm outline-none transition-all placeholder:text-gray-650"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-cyan-500/50 focus:glow-cyan text-white text-sm outline-none transition-all placeholder:text-gray-650"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello Arun, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-cyan-500/50 focus:glow-cyan text-white text-sm outline-none transition-all placeholder:text-gray-650 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-primary to-purple-500 text-white font-semibold text-sm hover:glow-cyan hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Submission success notification */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-semibold">
                      Thank you! Your message was sent successfully. Confetti is in the air!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
