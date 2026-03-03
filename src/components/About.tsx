"use client";

import { motion } from "framer-motion";
import { Heart, Target, Lightbulb, Link as LinkIcon, Calendar, ArrowRight } from "lucide-react";

export default function About() {
    const timeline = [
        { year: "2024", title: "The Ideation", desc: "Recognized the glaring accessibility gaps in modern health-tech platforms." },
        { year: "2025", title: "Beta Launch", desc: "Rolled out the first WCAG AA compliant community prototype to 500 initial users." },
        { year: "2026", title: "AbleHub 1.0", desc: "Secured seed funding and officially launched the fully-featured public platform." }
    ];

    const values = [
        { icon: Heart, title: "Radical Empathy", desc: "We design first for the margins, ensuring nobody is left behind by technology." },
        { icon: Target, title: "Uncompromising Quality", desc: "Accessibility isn't an overlay. It's built into the very foundation of our code." },
        { icon: Lightbulb, title: "Continuous Evolution", desc: "We listen to our community's needs and rapidly adapt our tools." },
        { icon: LinkIcon, title: "Secure Connection", desc: "Privacy is a human right. We protect your space with enterprise-grade security." }
    ];

    return (
        <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Founder Story Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Abstract Headshot Placeholder */}
                        <div className="relative w-full max-w-md aspect-[4/5] mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border-4 border-white z-10">
                            {/* Instead of a missing image, use a classy abstract gradient placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 opacity-90"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center bg-black/10">
                                <span className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80">HealthTech Founder & CEO</span>
                                <span className="text-3xl font-extrabold pb-4 border-b-2 border-white/20">Umangbhai</span>
                            </div>
                        </div>
                        {/* Decor */}
                        <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-64 h-64 bg-primary-200/50 rounded-full blur-[60px] -z-10"></div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-200/50 rounded-full blur-[60px] -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            We build what the <span className="text-primary-600">industry overlooked.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                AbleHub wasn't born in a boardroom. It was created out of sheer frustration with digital platforms that treated accessibility as an afterthought or a compliance checklist.
                            </p>
                            <p>
                                I watched family members struggle to connect with support networks simply because buttons lacked contrast, or websites couldn't be navigated without a mouse. The digital world was moving fast, but it was leaving millions behind.
                            </p>
                            <p className="font-medium text-slate-900 border-l-4 border-primary-500 pl-4 py-1">
                                "Our mission is simple: to build the most profoundly accessible digital community space on the internet."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Values & Timeline Grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-32">

                    {/* Core Values (Takes 7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-bold tracking-wide mb-8 border border-slate-200">
                            Our Principles
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary-100 hover:bg-white hover:shadow-xl transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                                        <v.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline (Takes 5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Background subtle glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-600/30 rounded-full blur-[80px]"></div>

                        <div className="flex items-center gap-3 mb-10 relative z-10">
                            <Calendar className="w-6 h-6 text-primary-400" />
                            <h3 className="text-2xl font-bold">The Journey</h3>
                        </div>

                        <div className="space-y-10 relative z-10">
                            {timeline.map((item, i) => (
                                <div key={i} className="relative pl-8">
                                    {/* Timeline Line */}
                                    {i !== timeline.length - 1 && (
                                        <div className="absolute left-[11px] top-8 bottom-[-40px] w-[2px] bg-slate-800 rounded-full"></div>
                                    )}
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-slate-900 bg-primary-500 shadow-[0_0_0_2px_rgba(30,41,59,1)]"></div>

                                    <div className="text-primary-400 font-bold font-mono text-sm mb-1">{item.year}</div>
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
