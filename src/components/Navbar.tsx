"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#programs" },
    { name: "Campus", href: "#campus" },
    { name: "Alumni", href: "#alumni" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-center">
          <nav 
            className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out border ${
              isScrolled 
                ? "bg-white/80 backdrop-blur-2xl shadow-2xl shadow-primary/10 border-white rounded-[2.5rem] px-6 py-3 max-w-5xl" 
                : "bg-transparent border-transparent rounded-none px-0 py-0 max-w-full"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-10">
              <div className={`p-2 rounded-xl transition-colors duration-300 ${isScrolled ? 'bg-primary/10 text-primary' : 'bg-white text-primary shadow-lg'}`}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className={`font-black text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                JG <span className="text-primary">University</span>
              </span>
            </Link>

            {/* Desktop Navigation - Animated Shared Layout */}
            <ul className="hidden md:flex items-center gap-2 relative" onMouseLeave={() => setHoveredItem(null)}>
              {navLinks.map((link) => (
                <li key={link.name} className="relative" onMouseEnter={() => setHoveredItem(link.name)}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 font-bold text-sm transition-colors duration-300 z-10 block ${
                      hoveredItem === link.name 
                        ? "text-primary" 
                        : (isScrolled ? "text-slate-600 hover:text-primary" : "text-slate-700 hover:text-primary")
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Framer Motion Background Highlight */}
                  <AnimatePresence>
                    {hoveredItem === link.name && (
                      <motion.div
                        layoutId="navHighlight"
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className={`font-bold text-sm transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}>
                Sign In
              </a>
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 rounded-full transition-colors ${
                isScrolled ? "bg-slate-100 text-slate-900" : "bg-white text-slate-900 shadow-md"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl md:hidden pt-32 px-6 pb-8 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-black text-slate-900 hover:text-primary transition-colors flex items-center justify-between group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-8 border-t border-slate-200 flex flex-col gap-4"
            >
              <button className="w-full bg-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-bold text-lg text-center">
                Sign In
              </button>
              <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center shadow-xl shadow-slate-900/20">
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
