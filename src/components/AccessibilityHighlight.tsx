"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Settings2, ZoomIn, Contrast, Keyboard, MousePointerClick } from "lucide-react";

export default function AccessibilityHighlight() {
    return (
        <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Visual Mockup (Left) */}
                    <div className="relative">
                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary-100/50 rounded-full blur-3xl -z-10"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 perspective-[1000px]"
                        >
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                                {/* Fake Browser Header */}
                                <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="mx-auto w-1/2 h-4 bg-white rounded-md flex items-center justify-center">
                                        <div className="w-24 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Mockup Content */}
                                <div className="p-6 relative">
                                    <div className="w-1/3 h-6 bg-slate-200 rounded-md mb-6 inline-flex items-center gap-2"></div>
                                    <div className="space-y-4">
                                        <div className="w-3/4 h-4 bg-slate-200 rounded-md"></div>
                                        <div className="w-full h-4 bg-slate-200 rounded-md"></div>
                                        <div className="w-5/6 h-4 bg-slate-200 rounded-md"></div>
                                    </div>

                                    {/* The Accessibility Panel (Animated Dropdown) */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="absolute top-6 right-6 w-64 bg-white shadow-xl rounded-xl border border-slate-200 p-4 z-20"
                                    >
                                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                                            <Settings2 className="w-5 h-5 text-primary-600" />
                                            <span className="font-semibold text-slate-800 text-sm">Accessibility Settings</span>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <ZoomIn className="w-4 h-4" /> Text Size
                                                </div>
                                                <div className="w-10 h-5 bg-primary-100 rounded-full flex items-center justify-end p-0.5 pointer-events-none">
                                                    <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Contrast className="w-4 h-4" /> High Contrast
                                                </div>
                                                <div className="w-10 h-5 bg-slate-200 rounded-full p-0.5 pointer-events-none">
                                                    <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <MousePointerClick className="w-4 h-4" /> Reduce Motion
                                                </div>
                                                <div className="w-10 h-5 bg-slate-200 rounded-full p-0.5 pointer-events-none">
                                                    <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Floating Toggle Button */}
                                    <div className="absolute top-6 right-6 w-10 h-10 bg-primary-600 rounded-full shadow-lg flex items-center justify-center text-white z-10">
                                        <Settings2 className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content (Right) */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wide mb-6 border border-emerald-100">
                                <BadgeCheck className="w-5 h-5" />
                                WCAG AA Ready
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                                Your experience, <span className="text-primary-600">your control.</span>
                            </h2>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We believe technology should adapt to you, not the other way around. Our built-in accessibility panel puts powerful tools directly in your hands.
                            </p>

                            <ul className="space-y-5">
                                {[
                                    { icon: ZoomIn, text: "Adjust text sizes instantly without breaking layouts." },
                                    { icon: Contrast, text: "Toggle high-contrast modes for optimal readability." },
                                    { icon: Keyboard, text: "Navigate entirely by keyboard with logical tab orders." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 text-lg">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
