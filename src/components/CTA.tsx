"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto rounded-3xl bg-slate-950 overflow-hidden border border-slate-800 shadow-2xl"
        >
          {/* Subtle elegant background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/20 via-transparent to-transparent opacity-50 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-10 relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 font-medium text-xs mb-6 border border-white/10">
                <Sparkles className="w-3 h-3 text-primary" />
                Admissions for Fall 2026 closing soon
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Ready to shape your <span className="text-primary">future?</span>
              </h2>
              
              <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Join thousands of successful alumni who have accelerated their careers with JG University's industry-driven curriculum.
              </p>
            </div>
            
            {/* Right Content / Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 group">
                Start Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto bg-transparent border border-slate-700 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all">
                Talk to Admissions
              </button>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
