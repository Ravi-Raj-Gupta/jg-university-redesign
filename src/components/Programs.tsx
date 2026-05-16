"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Shield, ArrowRight } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "B.Tech in AI & Machine Learning",
      description: "Master neural networks, generative AI, and advanced algorithms to build the intelligent systems of tomorrow.",
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      color: "from-violet-500 to-fuchsia-500",
      shadowColor: "shadow-fuchsia-500/30",
      delay: 0.1,
    },
    {
      title: "B.Sc (Hons) in Cyber Security",
      description: "Protect digital assets by mastering ethical hacking, cryptography, and modern network security protocols.",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "from-red-500 to-orange-500",
      shadowColor: "shadow-red-500/30",
      delay: 0.2,
    },
    {
      title: "iMSc Data Science",
      description: "Learn to extract insights from complex data sets using statistical analysis, Python, and big data visualization tools.",
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-emerald-500 to-teal-500",
      shadowColor: "shadow-teal-500/30",
      delay: 0.3,
    },
    {
      title: "Blockchain & Metaverse",
      description: "Pioneer the Web3 revolution. Build decentralized applications, smart contracts, and immersive digital experiences.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-cyan-500/30",
      delay: 0.4,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest mb-6"
          >
            Future-Proof Learning
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Programmes</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium"
          >
            We offer UGC-approved programmes that evolve as per future industry demands, from Quantum Computing to Full Stack Architecture.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: program.delay, type: "spring", bounce: 0.4 }}
              className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 group-hover:shadow-2xl group-hover:${program.shadowColor} transition-shadow duration-500 -z-20`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-8 shadow-lg ${program.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {program.icon}
              </div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{program.title}</h4>
              <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                {program.description}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 mt-auto bg-slate-50 px-4 py-2 rounded-full group-hover:bg-primary/5">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
