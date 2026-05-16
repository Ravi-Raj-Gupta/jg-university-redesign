"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jigardan Gadhvi",
      role: "Celebrity Singer & Alumnus",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. It fills me with pride to say that I am an alumnus of JG. The faculty members were more than just teachers; they served as mentors.",
      rating: 5,
    },
    {
      name: "Parth Rupareliya",
      role: "JG University Graduate",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "My time at JG was fulfilling and life-changing. They offer an exceptional curriculum that emphasizes both theoretical and practical learning. The faculty members are highly experienced and dedicated to providing personalized support.",
      rating: 5,
    },
    {
      name: "Yatendra Sinh Joddha",
      role: "Technical Head at TCS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: "My education at JG played a pivotal role in shaping my career as a Technical Head at TATA Consultancy Services. The BCA program provided me with a strong foundation in IT, giving me the opportunity to apply my knowledge in real-world scenarios.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white z-0">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" /> Alumni Success
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            Don't Just Take Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Word For It</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] relative group border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/20 group-hover:rotate-12 transition-all duration-500" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-slate-300 mb-10 leading-relaxed text-lg font-medium relative z-10 group-hover:text-white transition-colors">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20 z-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-primary-light font-medium tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
