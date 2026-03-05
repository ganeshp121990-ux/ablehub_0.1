"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        quote: "AbleHub completely changed how our community interacts. It's truly built for everyone.",
        author: "Sarah J.",
        role: "Community Leader",
        avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        quote: "The accessibility features are seamless and intuitive. Finally, a platform that gets it.",
        author: "David M.",
        role: "Accessibility Advocate",
        avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
        quote: "We've seen a 40% increase in engagement since moving our support groups here.",
        author: "Elena R.",
        role: "Care Coordinator",
        avatar: "https://i.pravatar.cc/150?u=elena",
    },
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
                        Trusted by inclusive organizations
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">

                        <div className="h-8 flex items-center font-bold text-xl text-slate-800 gap-2">
                            <div className="w-6 h-6 rounded-md bg-slate-800"></div> Beta Community
                        </div>
                        <div className="h-8 flex items-center font-bold text-xl text-slate-800 gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-800"></div> CareConnect
                        </div>
                        <div className="h-8 flex items-center font-bold text-xl text-slate-800 gap-2">
                            <div className="w-6 h-6 rotate-45 bg-slate-800"></div> InclusiveTech
                        </div>
                        <div className="h-8 flex items-center font-bold text-xl text-slate-800 gap-2 hidden sm:flex">
                            <div className="w-6 h-4 rounded-full bg-slate-800"></div> AccessForward
                        </div>
                    </div>
                </motion.div>


                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-6 text-amber-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">

                                    <img src={testimonial.avatar} alt={testimonial.author} className="object-cover w-full h-full" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
