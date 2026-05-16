"use client";

import Link from "next/link";
import { GraduationCap, Globe, MessageCircle, Share2, Users, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-24 pb-10 overflow-hidden border-t border-white/10 z-0">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Newsletter / CTA Box inside Footer */}
        <div className="mb-20 glass-dark bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"></div>
          <div className="max-w-xl relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Join our newsletter</h3>
            <p className="text-slate-400">Stay updated with the latest admissions news, campus events, and tech insights from our faculty.</p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0 relative z-10">
            <div className="flex items-center bg-slate-900/50 border border-white/10 rounded-full p-1.5 pl-6 backdrop-blur-md focus-within:border-primary/50 transition-colors w-full md:w-[350px]">
              <Mail className="w-5 h-5 text-slate-500 mr-3 hidden sm:block" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-white outline-none w-full placeholder:text-slate-500"
              />
              <button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white p-3 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 ml-2">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-white">
                JG<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Uni</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed pr-4">
              Empowering the next generation of tech leaders through industry-aligned education, practical learning, and world-class mentorship.
            </p>
            <div className="flex gap-3 pt-2">
              {[Globe, Users, MessageCircle, Share2].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:text-white text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Programs & Courses', 'About JGUni', 'Admissions', 'Student Life', 'Career Support'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-slate-400 hover:text-primary-light transition-colors relative group inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-primary absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300"></span>
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-slate-400 hover:text-primary-light transition-colors relative group inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-primary absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300"></span>
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-light" />
                </div>
                <span className="text-slate-400 leading-relaxed mt-1">123 Innovation Drive,<br />Tech District, CA 94103</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary-light" />
                </div>
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary-light" />
                </div>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">admissions@jguni.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-medium">© {currentYear} JGUni. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            Designed with <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div> for the modern era.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component since ChevronRight is used in the mapped arrays but wasn't imported at the top initially
function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
