"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Laptop, BookOpen, Globe2 } from "lucide-react";

export default function About() {
  const features = [
    "UGC Approved & NEP 2020 Compliant",
    "Whole Brain Learning Pedagogy",
    "Immersive & Experiential Learning",
    "Collaboration with Foreign Universities",
    "Full Pay On-The-Job Training Opportunities",
    "Cross-Cultural Internships"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="space-y-4 sm:translate-y-8">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students in class" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl p-6 bg-gradient-to-br from-primary to-accent text-white flex flex-col justify-center items-center text-center h-48 sm:h-64 relative group">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Laptop className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-xl">Tech-Enabled</h4>
                  <p className="text-sm text-white/80 mt-1">Smart Campus</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl p-6 bg-slate-900 text-white flex flex-col justify-center items-center text-center h-48 sm:h-64 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Globe2 className="w-10 h-10 mb-3 text-primary-light" />
                  <h4 className="font-bold text-xl">Global</h4>
                  <p className="text-sm text-slate-400 mt-1">Foreign Tie-ups</p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Robotics Lab" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>

            {/* Floating decoration */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -left-8 top-1/2 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-10"
            />
          </div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-widest mb-6 border border-slate-200">
              About JG University
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              A Legacy of Excellence since <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">1965</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sponsored by the ASIA Charitable Trust, JG University aims to bring excellence in everything it does. We stand by the idea of knowledge beyond books and provide students a real-life experience with an industry-relevant curriculum.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-slate-900/20 flex items-center gap-3 group">
              Discover Our Campus
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
