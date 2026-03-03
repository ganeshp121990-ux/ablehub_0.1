"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ZoomIn, Contrast, Keyboard, MousePointerClick, Type, ScanFace } from "lucide-react";

export default function Accessibility() {
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isDyslexicMode, setIsDyslexicMode] = useState(false);

    return (
        <section id="accessibility" className={`py-24 lg:py-32 transition-colors duration-500 border-b border-slate-100 ${isHighContrast ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-8 border shadow-sm ${isHighContrast ? 'bg-emerald-900/50 text-emerald-400 border-emerald-800' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}
                    >
                        <BadgeCheck className="w-5 h-5" />
                        Our Accessibility Commitment
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-6xl font-extrabold mb-6 tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}
                    >
                        Accessibility is <span className={isHighContrast ? 'text-emerald-400' : 'text-primary-600'}>not optional.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-xl md:text-2xl leading-relaxed text-balance ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}
                    >
                        We built AbleHub to exceed WCAG AA standards. Experience a platform that adapts entirely to how you interact with the world.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Live Demo Block (Takes 2x2 space on large screens) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`md:col-span-2 md:row-span-2 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between border ${isHighContrast ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}
                    >
                        <div className="relative z-10">
                            <h3 className={`text-2xl font-bold mb-4 ${isHighContrast ? 'text-white' : 'text-slate-900'} ${isDyslexicMode ? 'font-mono tracking-widest' : ''}`}>
                                Try it right now.
                            </h3>
                            <p className={`text-lg mb-8 ${isHighContrast ? 'text-slate-300' : 'text-slate-600'} ${isDyslexicMode ? 'font-mono' : ''}`}>
                                Toggle these settings to see how our platform adapts instantly. Notice how layouts remain unbreakable?
                            </p>

                            <div className="space-y-4 max-w-sm">
                                <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-colors ${isHighContrast ? 'bg-slate-700/50 border-emerald-500/30 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
                                    <div className="flex items-center gap-3">
                                        <Contrast className={`w-5 h-5 ${isHighContrast ? 'text-emerald-400' : 'text-slate-700'}`} />
                                        <span className={`font-semibold ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>High Contrast</span>
                                    </div>
                                    <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isHighContrast ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isHighContrast ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={isHighContrast}
                                        onChange={() => setIsHighContrast(!isHighContrast)}
                                    />
                                </label>

                                <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-colors ${isHighContrast ? 'bg-slate-700/50 border-slate-600 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
                                    <div className="flex items-center gap-3">
                                        <Type className={`w-5 h-5 ${isHighContrast ? 'text-emerald-400' : 'text-slate-700'}`} />
                                        <span className={`font-semibold ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>Dyslexia Font</span>
                                    </div>
                                    <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDyslexicMode ? (isHighContrast ? 'bg-emerald-500' : 'bg-primary-600') : 'bg-slate-300'}`}>
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDyslexicMode ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={isDyslexicMode}
                                        onChange={() => setIsDyslexicMode(!isDyslexicMode)}
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Decorative Background for Demo */}
                        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary-100/20 rounded-full blur-[80px] pointer-events-none"></div>
                    </motion.div>

                    {/* WCAG Compliance Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`rounded-[2.5rem] p-8 border ${isHighContrast ? 'bg-slate-800 border-slate-700' : 'bg-blue-50 border-blue-100'}`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isHighContrast ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                            <ScanFace className="w-6 h-6" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>WCAG AA Certified Layer</h4>
                        <p className={isHighContrast ? 'text-slate-400' : 'text-slate-600'}>Color contrast ratios strictly exceed 4.5:1. Aria labels map every interactive DOM element.</p>
                    </motion.div>

                    {/* Keyboard Nav Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`md:col-span-2 lg:col-span-1 rounded-[2.5rem] p-8 border ${isHighContrast ? 'bg-slate-800 border-slate-700' : 'bg-purple-50 border-purple-100'}`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isHighContrast ? 'bg-purple-900/50 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                            <Keyboard className="w-6 h-6" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>100% Keyboard Navigable</h4>
                        <p className={isHighContrast ? 'text-slate-400' : 'text-slate-600'}>Throw your mouse away. Logical tab orders and visible focus states mean total control via keyboard alone.</p>

                        <div className={`mt-6 p-4 rounded-xl flex items-center justify-between ${isHighContrast ? 'bg-slate-900' : 'bg-white'}`}>
                            <div className={`px-3 py-1.5 rounded text-sm font-bold border-2 ${isHighContrast ? 'border-emerald-500 text-emerald-400' : 'border-primary-500 text-primary-700'} ring-4 ${isHighContrast ? 'ring-emerald-500/30' : 'ring-primary-500/20'}`}>Tab Focus</div>
                            <span className={isHighContrast ? 'text-slate-500' : 'text-slate-400'}>→</span>
                            <div className={`px-3 py-1.5 rounded text-sm font-bold border-2 ${isHighContrast ? 'border-slate-600 text-slate-400' : 'border-slate-200 text-slate-400'}`}>Next Item</div>
                        </div>
                    </motion.div>

                    {/* Text Scaling Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`md:col-span-2 rounded-[2.5rem] p-8 border flex flex-col md:flex-row items-center gap-8 ${isHighContrast ? 'bg-slate-800 border-slate-700' : 'bg-amber-50 border-amber-100'}`}
                    >
                        <div className="flex-1">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isHighContrast ? 'bg-amber-900/50 text-amber-400' : 'bg-amber-100 text-amber-600'}`}>
                                <ZoomIn className="w-6 h-6" />
                            </div>
                            <h4 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>Unbreakable Layouts</h4>
                            <p className={isHighContrast ? 'text-slate-400' : 'text-slate-600'}>Scale text up to 200% without losing functionality. The interface breathes and expands to fit your reading needs, never truncating actions.</p>
                        </div>
                        <div className={`w-full md:w-48 h-32 rounded-2xl flex items-center justify-center text-4xl font-extrabold ${isHighContrast ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} shadow-sm`}>
                            AaBb
                        </div>
                    </motion.div>

                    {/* Reduced Motion Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className={`md:col-span-2 rounded-[2.5rem] p-8 border ${isHighContrast ? 'bg-slate-800 border-slate-700' : 'bg-emerald-50 border-emerald-100'}`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isHighContrast ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                            <MousePointerClick className="w-6 h-6" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>Respects Reduced Motion</h4>
                        <p className={isHighContrast ? 'text-slate-400' : 'text-slate-600'}>If your OS requests reduced motion, AbleHub instantly disables all parallax, fades, and scale animations to prevent vestibular discomfort.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
