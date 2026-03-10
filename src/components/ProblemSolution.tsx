"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Eye, Ear, BrainCircuit } from "lucide-react";



const solutions = [
    {
        title: "Your Social Circle, Simplified",
        desc: "Stay connected in a space that feels comfortable.",
        icon: BrainCircuit,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        title: "Stay Connected with Friends",
        desc: "Share your life, play games, and connect on a social platform built for meaningful interactions.",
        icon: Eye,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        title: "Discover Local Events & Activities",
        desc: "Find events where you can meet people and enjoy shared experiences.",
        icon: Ear,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
];

export default function ProblemSolution() {
    return (
        <section id="problem-solution" className="py-24 bg-slate-50 border-b border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Connection isn’t a feature. <span className="text-[#6B2B77]">It’s the foundation of community.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Many platforms focus only on services. AbleHub brings people, opportunities, and experiences together in one place to create a stronger and more inclusive community.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                                <HeartHandshake className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">The AbleHub Solution</h3>
                        </div>

                        <div className="space-y-6">
                            {solutions.map((solution, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-5 items-start sm:items-center transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-xl ${solution.bg} flex items-center justify-center shrink-0`}>
                                        <solution.icon className={`w-7 h-7 ${solution.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h4>
                                        <p className="text-slate-600">{solution.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
