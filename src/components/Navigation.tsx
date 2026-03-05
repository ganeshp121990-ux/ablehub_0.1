'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'problem-solution', 'about', 'contact'];
            let currentSection = 'home';

            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        currentSection = section;
                        break;
                    }
                }
            }

           
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'ProblemSolution', href: '#problem-solution' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[88px] flex items-center ${isScrolled
                ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl w-full">
                <div className="flex items-center justify-between">
                        
                    <a
                        href="#home"
                        className="flex items-center z-50 group origin-left"
                        aria-label="AbleHub Home"
                    >
                        <Image
                            src="/Able_Logo.svg"
                            alt="AbleHub Logo"
                            width={260}
                            height={80}
                            priority
                            className="w-56 md:w-64 h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>

                    
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
                        <ul className="flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm font-medium transition-colors group block"
                                    >
                                        <span className={`relative z-10 transition-colors duration-200 ${activeSection === link.href.substring(1)
                                            ? 'text-slate-900'
                                            : 'text-slate-500 group-hover:text-slate-900'
                                            }`}>
                                            {link.name}
                                        </span>
                                        {activeSection === link.href.substring(1) && (
                                            <motion.div
                                                layoutId="desktop-nav-indicator"
                                                className="absolute inset-0 bg-slate-100 rounded-xl"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                            
                                        <div className="absolute inset-0 bg-slate-50 rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-0" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                        
                    <div className="hidden md:flex items-center">
                        <a
                            href="#contact"
                            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Get Early Access
                        </a>
                    </div>

                        
                    <button
                        className="md:hidden p-2 z-50 relative w-10 h-10 focus:outline-none text-slate-800 transition-transform active:scale-95 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200/60"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

                            
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(10px)', transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, type: 'spring', bounce: 0 }}
                        className="md:hidden absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200/50 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 gap-6">
                            <ul className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${activeSection === link.href.substring(1)
                                                ? 'bg-slate-50 text-slate-900'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                                }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 border-t border-slate-100">
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex justify-center w-full px-5 py-3.5 rounded-xl bg-slate-900 text-white font-medium shadow-md active:scale-95 transition-transform"
                                >
                                    Get Early Access
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
