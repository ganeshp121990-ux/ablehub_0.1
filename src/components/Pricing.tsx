"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, X } from "lucide-react";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const tiers = [
        {
            name: "Community",
            priceMonthly: 0,
            priceYearly: 0,
            description: "Essential access to safe, moderated health-tech spaces.",
            features: [
                "Full WCAG AA interface",
                "Access to public support groups",
                "Text & voice messaging",
                "Standard data encryption"
            ],
            notIncluded: [
                "1-on-1 verified peer matching",
                "Priority moderator support",
                "Custom community creation"
            ],
            buttonText: "Join for Free",
            buttonStyle: "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200",
            popular: false
        },
        {
            name: "AblePlus",
            priceMonthly: 12,
            priceYearly: 9,
            description: "The complete toolkit for individuals seeking deep connections.",
            features: [
                "Everything in Community",
                "1-on-1 verified peer matching",
                "Priority moderator support",
                "End-to-end encrypted video calls",
                "Advanced custom accessibility profiles"
            ],
            notIncluded: [
                "Custom community creation",
                "Organization admin dashboard"
            ],
            buttonText: "Start 14-Day Trial",
            buttonStyle: "bg-primary-600 text-white hover:bg-primary-700 shadow-xl shadow-primary-600/20",
            popular: true
        },
        {
            name: "Organization",
            priceMonthly: 49,
            priceYearly: 39,
            description: "Powerful tools for care providers, non-profits, and clinics.",
            features: [
                "Everything in AblePlus",
                "Custom community creation",
                "Organization admin dashboard",
                "Dedicated accessibility specialist",
                "HIPAA-compliant data exporting",
                "White-label branding options"
            ],
            notIncluded: [],
            buttonText: "Contact Sales",
            buttonStyle: "bg-slate-900 text-white hover:bg-slate-800",
            popular: false
        }
    ];

    const faqs = [
        { q: "Do I have to pay to use AbleHub?", a: "No. Our core community features will always be free. We believe accessibility should not be behind a paywall. AblePlus is for users who want advanced verified matching and video capabilities." },
        { q: "Is there a discount for non-profits?", a: "Absolutely. We offer a 50% discount on the Organization tier for registered 501(c)(3) entities and equivalent international non-profits." },
        { q: "How does the 14-day trial work?", a: "You can try AblePlus for 14 days without being charged. If you cancel before the trial ends, you won't pay a cent. We'll even remind you 3 days before it expires." }
    ];

    return (
        <section id="pricing" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Simple, transparent <span className="text-primary-600">pricing.</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed text-balance">
                        No hidden fees. We built our pricing model to be as accessible and straightforward as our platform.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 rounded-full bg-slate-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary-100 transition-colors"
                            aria-label="Toggle billing cycle"
                        >
                            <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Yearly</span>
                            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Save 25%</span>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col ${tier.popular ? 'border-2 border-primary-500 shadow-2xl scale-100 lg:scale-105 z-10' : 'border border-slate-200 shadow-lg'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                            <p className="text-slate-500 text-sm h-10 mb-6">{tier.description}</p>

                            <div className="mb-8 flex items-end gap-1">
                                <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                                    ${isYearly ? tier.priceYearly : tier.priceMonthly}
                                </span>
                                {tier.priceMonthly > 0 && <span className="text-slate-500 font-medium pb-1">/mo</span>}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-transform hover:scale-[1.02] ${tier.buttonStyle}`}>
                                {tier.buttonText}
                            </button>

                            <div className="flex-grow space-y-6">
                                <div className="space-y-4">
                                    {tier.features.map((feature, j) => (
                                        <div key={j} className="flex gap-3 items-start">
                                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 font-bold" />
                                            </div>
                                            <span className="text-slate-700 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {tier.notIncluded.length > 0 && (
                                    <div className="space-y-4 pt-6 border-t border-slate-100 opacity-60">
                                        {tier.notIncluded.map((feature, j) => (
                                            <div key={j + 10} className="flex gap-3 items-start">
                                                <X className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                                                <span className="text-slate-600 text-sm line-through">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="flex justify-center mb-32">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm text-sm font-semibold text-slate-700">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        14-Day Money-Back Guarantee. Cancel anytime with one click.
                    </div>
                </div>

                {/* Simple FAQ directly below pricing */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-center text-slate-900 mb-10">Pricing Questions</h3>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-primary-100 transition-colors"
                            >
                                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
