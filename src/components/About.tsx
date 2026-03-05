"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image"

const carouselItems = [
    {
        title: "Step In",
        desc: "Start your journey in a welcoming space",
        icon: (
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
        ),
        color: "bg-blue-50",
        ring: "ring-blue-100"
    },
    {
        title: "Stay Safe",
        desc: "Verified profiles and secure connections",
        icon: (
            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        color: "bg-purple-50",
        ring: "ring-purple-100"
    },
    {
        title: "Find Friends",
        desc: "Meet like-minded people and build connections",
        icon: (
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: "bg-emerald-50",
        ring: "ring-emerald-100"
    },
    {
        title: "Have Fun",
        desc: "Enjoy games, activities and social moments",
        icon: (
            <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "bg-amber-50",
        ring: "ring-amber-100"
    }
];

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % carouselItems.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    return (
        <section id="about" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">

                <div className="max-w-3xl mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Our Mission</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8 text-balance">
                            We build what the  <span className="text-[#6B2B77]">industry overlooked.</span>
                        </h3>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl text-pretty">
                            Our app is built for the disability community, creating a caring and supportive social space where members can connect, share experiences, and build genuine friendships. It offers a safe environment that encourages social interaction at a comfortable pace, helping users feel valued and included. Designed for the NDIS community, the platform provides opportunities to chat, play games, and meet like-minded people in a positive and respectful space..
                        </p>
                    </motion.div>
                </div>


                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative"
                    >

                        <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-soft group">
                            <img
                                src="/Able_Logo.svg"
                                alt="Founder"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] transition-colors group-hover:ring-black/5"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="text-slate-900 font-serif text-6xl text-blue-200 mb-4 font-bold tracking-tight">"</div>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10 text-pretty">
                            <p>
                                We focus on meaningful connection and everyday enjoyment, helping users build friendships that bring companionship and social confidence. The app encourages interaction in a way that feels natural and supportive, offering a space where people can relax, engage, and enjoy shared experiences. It’s about creating opportunities for connection and care, making social participation easier and more rewarding.
                            </p>

                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden ring-2 ring-white shadow-soft">
                                <img src="/Able_Logo.svg" alt="Umangbhai" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Umangbhai</div>
                                <div className="text-sm font-medium text-slate-500">Founder & CEO</div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative overflow-hidden w-full max-w-4xl mx-auto rounded-[2.5rem] bg-slate-50/50 border border-slate-100 p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="relative h-64 md:h-56">
                        {carouselItems.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center text-center justify-center ${activeIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
                            >
                                <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mb-6 ring-1 shadow-sm ${item.ring}`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-md text-pretty">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-3 mt-8">
                        {carouselItems.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-blue-600 shadow-sm' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
