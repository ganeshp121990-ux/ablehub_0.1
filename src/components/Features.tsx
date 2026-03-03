"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Ear, Users, Lock, Sparkles, Check, Settings, Search, Bell, Contrast, Type, Volume2, Phone, Video } from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Accessible by Default.",
            subtitle: "Never struggle with an interface again.",
            description: "Built from the ground up to exceed WCAG AA standards. Customizable interfaces, high contrast options, and screen-reader optimizations tailored to your specific cognitive and visual needs.",
            useCase: "Perfect for users who need larger text, dyslexic fonts, or specialized contrast modes without relying entirely on browser extensions.",
            testimonial: {
                text: "The high contrast mode completely changed how I connect online.",
                author: "James T.",
            },
            icon: Eye,
            color: "text-blue-600",
            bg: "bg-blue-100/50",
            gradient: "from-blue-50/50 to-white",
            glowGradient: "from-blue-400/20 via-transparent to-transparent",
            mockup: (
                <>
                    {/* Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>

                    {/* UI Mockup Container */}
                    <div className="absolute top-10 right-[-10px] lg:right-[-30px] w-[110%] h-[450px] bg-[#0c0c0e] rounded-l-3xl shadow-2xl overflow-hidden border-t border-l border-b border-white/10 flex flex-col transform transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-2">
                        {/* Header */}
                        <div className="h-16 px-6 border-b border-blue-500/20 flex items-center justify-between bg-[#0c0c0e]/95 backdrop-blur z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]">AH</div>
                                <span className="text-blue-400 font-bold tracking-wide">Community Feed</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/70">
                                <Search className="w-5 h-5 hover:text-blue-400 transition-colors" />
                                <Bell className="w-5 h-5 hover:text-blue-400 transition-colors" />
                            </div>
                        </div>
                        {/* Main Content + Panel partition */}
                        <div className="flex-1 flex overflow-hidden">
                            {/* Feed area */}
                            <div className="flex-1 p-6 space-y-5 bg-[#0c0c0e]">
                                <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] shadow-inner">
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-blue-500" />
                                        <div>
                                            <div className="font-bold text-white text-sm">Sarah Jenkins</div>
                                            <div className="text-blue-400/80 text-xs font-mono">2 hours ago</div>
                                        </div>
                                    </div>
                                    <p className="text-white text-base leading-relaxed font-medium">Just found the high-contrast mode! It makes reading long posts so much easier on my eyes. Has anyone else tried the screen reader integration yet?</p>
                                </div>
                            </div>
                            {/* Accessibility Panel Edge */}
                            <div className="w-[180px] sm:w-[240px] bg-[#18181b] border-l border-white/10 flex flex-col pt-4">
                                <div className="px-5 pb-3 border-b border-white/10 flex justify-between items-center">
                                    <span className="text-white font-bold text-sm uppercase tracking-wider">Accessibility</span>
                                    <Settings className="w-4 h-4 text-white/50" />
                                </div>
                                <div className="p-5 space-y-6">
                                    {/* Action Toggles */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Contrast className="w-4 h-4 text-blue-400" />
                                            <span className="text-blue-400 font-bold text-sm hidden sm:inline">Contrast</span>
                                        </div>
                                        <div className="w-9 h-5 bg-blue-500 rounded-full relative shadow-[0_0_10px_rgba(59,130,246,0.3)] shrink-0">
                                            <div className="absolute right-1 top-1 w-3 h-3 bg-[#0c0c0e] rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Type className="w-4 h-4 text-white/70" />
                                            <span className="text-white/90 text-sm hidden sm:inline">Dyslexic Font</span>
                                        </div>
                                        <div className="w-9 h-5 bg-white/20 rounded-full relative shrink-0">
                                            <div className="absolute left-1 top-1 w-3 h-3 bg-white/80 rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Volume2 className="w-4 h-4 text-blue-400" />
                                            <span className="text-white/90 text-sm hidden sm:inline">Screen Reader</span>
                                        </div>
                                        <div className="w-9 h-5 bg-blue-500 rounded-full relative shadow-[0_0_10px_rgba(59,130,246,0.3)] shrink-0">
                                            <div className="absolute right-1 top-1 w-3 h-3 bg-[#0c0c0e] rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "Safe, Verified Community.",
            subtitle: "Connect with real people, securely.",
            description: "Strict verification processes ensure you're talking to real peers. A heavily moderated, supportive environment where you can connect safely and comfortably.",
            useCase: "Ideal for support groups and caregivers who require a confidential space away from public social networks.",
            testimonial: null,
            icon: ShieldCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-100/50",
            gradient: "from-emerald-50/50 to-white",
            glowGradient: "from-emerald-400/20 via-transparent to-transparent",
            reverse: true,
            mockup: (
                <>
                    {/* Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>

                    {/* UI Mockup Container */}
                    <div className="absolute -bottom-10 -left-6 lg:-left-12 w-[110%] h-[420px] bg-white rounded-tr-3xl shadow-[5px_-5px_30px_rgba(0,0,0,0.05)] overflow-hidden border-t border-r border-slate-100 flex flex-col transform transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-2">
                        {/* Header */}
                        <div className="h-[76px] px-6 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur z-10 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Group" className="w-12 h-12 rounded-xl object-cover border-2 border-slate-100" />
                                    <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white rounded-full p-[3px] border-2 border-white shadow-sm">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 flex items-center gap-1.5 text-lg">
                                        Caregiver Support Network
                                    </div>
                                    <div className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                                        1,204 Verified Members
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Chat Area */}
                        <div className="flex-1 bg-slate-50/80 p-6 space-y-6 overflow-hidden relative">
                            {/* Verified Banner fixed in chat */}
                            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-3.5 text-sm text-emerald-800 flex items-start gap-3 shadow-sm mx-auto w-full max-w-md">
                                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <p className="font-medium leading-snug">This is a verified safe space. All members have passed identity verification.</p>
                            </div>

                            <div className="flex items-end gap-3 opacity-90 mt-8">
                                <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-9 h-9 rounded-full shadow-sm border border-slate-200" />
                                <div className="bg-white border border-slate-100 p-3.5 px-4 rounded-2xl rounded-bl-sm shadow-sm max-w-[80%]">
                                    <p className="text-slate-700 text-[15px] font-medium leading-relaxed">Has anyone dealt with the new insurance paperwork?</p>
                                </div>
                            </div>

                            <div className="flex items-end gap-3 flex-row-reverse">
                                <img src="https://i.pravatar.cc/100?img=68" alt="User" className="w-9 h-9 rounded-full shadow-sm border border-emerald-600" />
                                <div className="bg-emerald-600 text-white p-3.5 px-4 rounded-2xl rounded-br-sm shadow-md max-w-[80%]">
                                    <p className="text-white text-[15px] font-medium leading-relaxed">Yes! I have a template that speeds it up. I'll share it via secure file transfer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "Barrier-Free Communication.",
            subtitle: "Express yourself however you prefer.",
            description: "Intuitive messaging, video calls with auto-captions, and voice notes that make connecting with others simple and barrier-free.",
            useCase: "Switch easily between voice memos and text depending on your energy levels or mobility that day.",
            testimonial: {
                text: "Voice-to-text is flawless. It makes participating so much easier.",
                author: "Maria S.",
            },
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-100/50",
            gradient: "from-purple-50/50 to-white",
            glowGradient: "from-purple-400/20 via-transparent to-transparent",
            mockup: (
                <>
                    {/* Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-400/30 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>

                    {/* UI Mockup Container */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] lg:w-[110%] h-[90%] bg-[#0f172a] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-slate-700 flex flex-col transform transition-transform duration-700 group-hover:scale-105">
                        {/* Video Feed */}
                        <div className="relative flex-1 bg-slate-900 flex items-center justify-center overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Video Call Main Participant" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>

                            {/* Auto-Captions Bubble */}
                            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] bg-black/60 backdrop-blur-xl rounded-2xl p-4 md:p-5 text-center border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                                <p className="text-white text-base md:text-xl font-medium leading-tight">
                                    "It's so wonderful to finally see everyone. <span className="text-purple-400 font-bold">The auto-captions are incredibly fast.</span>"
                                </p>
                            </div>

                            {/* Status Indicators */}
                            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-col sm:flex-row gap-2 sm:gap-3 items-end sm:items-center">
                                <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-2 border border-white/10 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                                    LIVE
                                </div>
                                <div className="bg-purple-600 px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-purple-900/40">
                                    <Ear className="w-3.5 h-3.5" />
                                    CC Active
                                </div>
                            </div>

                            {/* Self View PIP */}
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/50 backdrop-blur-md pl-1.5 pr-4 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-2 border border-white/10 shadow-sm">
                                <img src="https://i.pravatar.cc/100?img=44" alt="You" className="w-7 h-7 rounded-full border border-white/20 object-cover" />
                                Marcus (You)
                            </div>
                        </div>

                        {/* Call Controls Area */}
                        <div className="h-[70px] sm:h-[84px] bg-[#0f172a]/95 backdrop-blur-xl border-t border-slate-800 flex items-center justify-center gap-4 sm:gap-6 px-6 relative z-10">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700 shadow-sm"><Volume2 className="w-5 h-5" /></div>
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(147,51,234,0.4)] cursor-pointer"><Video className="w-6 h-6" /></div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer border border-red-500/20"><Phone className="w-5 h-5 ml-[2px] mt-[1px] transform rotate-[135deg]" /></div>
                        </div>
                    </div>
                </>
            )
        }
    ];

    const comparisonData = [
        { feature: "WCAG AA Compliant Core", ablehub: true, traditional: false },
        { feature: "Built-in Screen Reader Modes", ablehub: true, traditional: false },
        { feature: "Verified Peer Safety", ablehub: true, traditional: "Partial" },
        { feature: "Data Monetization Free", ablehub: true, traditional: false },
        { feature: "Dyslexia Friendly Fonts", ablehub: true, traditional: false },
    ];

    return (
        <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-bold tracking-wide mb-6 border border-primary-100">
                        <Sparkles className="w-4 h-4" />
                        Premium Capabilities
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Built for your <span className="text-primary-600">peace of mind.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                        Every feature in AbleHub is crafted to ensure a trustworthy, safe, and profoundly accessible experience for all our members.
                    </p>
                </div>

                {/* Alternating Feature Blocks */}
                <div className="space-y-32 mb-32">
                    {features.map((feature, index) => (
                        <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${feature.reverse ? 'lg:rtl' : ''}`}>

                            {/* Copy Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={feature.reverse ? 'lg:ltr' : ''}
                            >
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-8`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">
                                    {feature.title}
                                </h3>
                                <h4 className={`text-xl font-semibold mb-6 ${feature.color}`}>
                                    {feature.subtitle}
                                </h4>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8">
                                    <p className="text-sm font-semibold text-slate-900 mb-1 uppercase tracking-wider">Use Case</p>
                                    <p className="text-slate-600 italic">"{feature.useCase}"</p>
                                </div>

                                {feature.testimonial && (
                                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0 border border-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm">
                                            {feature.testimonial.author[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">"{feature.testimonial.text}"</p>
                                            <p className="text-xs text-slate-500">{feature.testimonial.author}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>

                            {/* Visual / Graphic Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${feature.gradient} border border-slate-100 shadow-xl group flex items-center justify-center`}
                            >
                                {feature.mockup}
                            </motion.div>

                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">The AbleHub Advantage</h3>
                        <p className="text-slate-600">Why thousands are migrating to specialized inclusive platforms.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="pb-4 pt-2 font-bold text-slate-900 w-1/2 text-lg">Feature</th>
                                    <th className="pb-4 pt-2 text-center text-primary-600 w-1/4">
                                        <div className="bg-primary-100 text-primary-700 py-2 px-4 rounded-xl inline-block font-extrabold text-sm tracking-wide">
                                            AbleHub
                                        </div>
                                    </th>
                                    <th className="pb-4 pt-2 text-center font-bold text-slate-500 w-1/4">Others</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="group hover:bg-white transition-colors">
                                        <td className="py-5 font-medium text-slate-700">{row.feature}</td>
                                        <td className="py-5 text-center">
                                            <div className="flex justify-center">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                                    <Check className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 text-center text-slate-500 font-medium">
                                            {typeof row.traditional === 'boolean' ? (
                                                row.traditional ? <Check className="w-5 h-5 mx-auto opacity-50" /> : <span className="opacity-50 text-xl font-bold">-</span>
                                            ) : (
                                                row.traditional
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
