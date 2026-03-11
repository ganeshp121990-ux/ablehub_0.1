"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                console.error("Failed to send message");
            }
        } catch (error) {
            console.error("Email failed:", error);
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden text-left">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">


                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-bold tracking-wide mb-8 border border-primary-100">
                            Get in Touch
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                            We’re here to help  <span className="text-[#6B2B77]">let’s connect.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
                            Have a question or need support? Get in touch and our team will be happy to assist you. We aim to respond quickly and provide the help you need.
                        </p>


                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                    <Clock className="w-5 h-5 text-slate-600" />
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Fast Response Times</h4>
                                    <p className="text-slate-600">Expect a human response within 24 hours, guaranteed.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                    <ShieldCheck className="w-5 h-5 text-slate-600" />
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Secure & Confidential</h4>
                                    <p className="text-slate-600">Your information is encrypted and never shared externally.</p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <a href="mailto:hello@ablehub.app" className="flex items-center gap-4 text-slate-700 hover:text-primary-600 transition-colors group mb-4">
                                <Mail className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                                <span className="font-semibold text-lg">dev@ablehub.com.au</span>
                            </a>
                            <a href="tel:+18005551234" className="flex items-center gap-4 text-slate-700 hover:text-primary-600 transition-colors group">
                                <Phone className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                                <span className="font-semibold text-lg">           </span>
                            </a>
                        </div>
                    </div>


                    <div className="relative">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-br from-primary-50 to-secondary-50 rounded-[3rem] -z-10 rotate-3 scale-105 opacity-50"></div>

                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">

                            <AnimatePresence mode="wait">
                                {!isSuccess ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>

                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                                placeholder="Jane Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                                placeholder="jane@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            <p className="mt-2 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                                                <ShieldCheck className="w-3.5 h-3.5" /> We'll never share your email.
                                            </p>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">How can we help?</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={4}
                                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none resize-none text-slate-900 placeholder:text-slate-400"
                                                placeholder="Tell us about your organization or request..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 shadow-xl shadow-primary-600/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2 mt-4"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                    Sending securely...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-500 relative">
                                            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Message sent securely!</h3>
                                        <p className="text-slate-600 max-w-sm">
                                            Thank you for reaching out. One of our specialists will get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
