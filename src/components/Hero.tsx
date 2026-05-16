"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, Award, CheckCircle2, Star, Sparkles } from "lucide-react";

export default function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const wordAnimation: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  };

  const titleText = "Knowledge Beyond";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/30 blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.6, 1], x: [0, 100, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/30 blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.4, 1], y: [0, -100, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[30%] w-[30%] h-[30%] rounded-full bg-fuchsia-500/20 blur-[100px] mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px] border-b border-white/50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-white text-slate-800 font-semibold text-sm mb-8 shadow-xl shadow-primary/5">
              <Sparkles className="w-4 h-4 text-accent" />
              A New Age Tech-Driven University
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold ml-2 border border-primary/20">UGC Approved</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-slate-900 leading-[1.05] mb-8">
              <motion.span className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
                {titleText.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordAnimation} className="inline-block">{word}</motion.span>
                ))}
              </motion.span>
              <motion.span variants={wordAnimation} className="relative inline-block mt-2">
                <span className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-40 rounded-full animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-sm">Books.</span>
              </motion.span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
              Equipping students with experiential knowledge to shape the future. Seamlessly transition into employment with our industry-driven Curriculum.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <button className="relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-3 group border border-slate-700 hover:border-primary/50 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                Explore Programmes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
              
              <button className="bg-white/60 backdrop-blur-md hover:bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 group border border-white hover:border-primary/20 shadow-lg shadow-slate-200/50 w-full sm:w-auto">
                <div className="bg-gradient-to-tr from-primary to-accent p-2 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                Virtual Campus Tour
              </button>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6 text-sm font-semibold text-slate-600 bg-white/40 backdrop-blur-sm py-3 px-6 rounded-3xl border border-white inline-flex shadow-sm">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Student" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Student" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Student" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-xs text-white font-bold z-10">
                  +17
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-400 mb-0.5">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <span>17 Colleges & 3 Schools Legacy</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative lg:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[3rem] blur-3xl transform rotate-3 scale-105 opacity-60 animate-pulse"></div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white/80 bg-white z-10 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 mix-blend-overlay"></div>
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="JG University Campus" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="hidden lg:flex absolute top-[10%] -left-[5%] lg:-left-[25%] bg-white/80 backdrop-blur-xl p-5 rounded-2xl items-center gap-4 shadow-2xl z-20 border border-white">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl shadow-lg shadow-primary/30">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="pr-4">
                <h4 className="text-3xl font-black text-slate-900 leading-none mb-1">50+</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Hiring Partners</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }} className="hidden lg:block absolute bottom-[15%] -right-[5%] lg:-right-[15%] bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl z-20 border border-white w-56">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-xl text-accent-dark border border-accent/20">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">ASIA Trust</p>
                  <h4 className="text-2xl font-black text-slate-900 leading-none">Since 1965</h4>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-accent via-primary to-secondary rounded-full relative">
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px] -translate-x-4 animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }} className="hidden lg:flex absolute top-[65%] -left-[10%] lg:-left-[15%] bg-slate-900 text-white p-4 rounded-2xl shadow-2xl shadow-slate-900/40 z-20 items-center gap-3 border border-slate-700/50">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-black tracking-wide">NEP 2020</p>
                <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Compliant</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
