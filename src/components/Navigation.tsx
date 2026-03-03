'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);


            const sections = ['about', 'features', 'faqs'];
            let currentSection = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'FAQs', href: '#faqs' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 z-50 group" aria-label="AbleHub Home">
                        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary-500 group-hover:scale-105 transition-transform duration-300">
                            {/* Abstract Bridge & People */}
                            <path d="M4 28C14 16 26 16 36 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            <path d="M12 26V12M28 26V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            <path d="M12 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="20" cy="22" r="2.5" fill="currentColor" />
                            <path d="M20 24.5V30M18 30L20 26L22 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex flex-col justify-center">
                            <span className="text-[1.35rem] font-extrabold tracking-tight text-primary-700 leading-none font-sans" style={{ letterSpacing: '-0.05em' }}>ablehub</span>
                            <span className="text-[0.45rem] font-bold tracking-[0.1em] text-primary-900 leading-none mt-0.5 uppercase">Bridging Community Together</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors relative py-2 ${activeSection === link.href.substring(1)
                                            ? 'text-slate-900'
                                            : 'text-slate-500 hover:text-slate-900'
                                            }`}
                                    >
                                        {link.name}
                                        {activeSection === link.href.substring(1) && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-600 rounded-full" />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="px-5 py-2.5 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 hover:shadow-md transition-all active:scale-95"
                        >
                            Get Early Access
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 z-50 relative w-10 h-10 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`absolute left-2.5 block w-5 h-[2px] bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'top-1/2 -rotate-45 -translate-y-1/2' : 'top-[14px]'
                            }`} />
                        <span className={`absolute left-2.5 top-1/2 block w-5 h-[2px] bg-slate-900 -translate-y-1/2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`} />
                        <span className={`absolute left-2.5 block w-5 h-[2px] bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'top-1/2 rotate-45 -translate-y-1/2' : 'bottom-[14px]'
                            }`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    <ul className="flex flex-col items-center gap-6 text-center w-full">
                        {navLinks.map((link) => (
                            <li key={link.name} className="w-full border-b border-slate-100 pb-4">
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-xl font-medium ${activeSection === link.href.substring(1) ? 'text-primary-600' : 'text-slate-600'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full max-w-xs py-4 text-center rounded-full bg-primary-600 text-white font-medium shadow-md"
                    >
                        Get Early Access
                    </a>
                </div>
            </div>
        </header>
    );
}
