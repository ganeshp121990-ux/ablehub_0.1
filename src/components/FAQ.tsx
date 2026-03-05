'use client';

import { useState } from 'react';

const faqItems = [
    {
        id: "faq-0",
        question: "Who can join AbleHub?",
        answer: "Anyone in the NDIS community – participants, support workers, RNs, providers or professionals connected with NDIS – can join."
    },
    {
        id: "faq-1",
        question: "Is it free to use?",
        answer: "Yes, Able Hub is free to use and available to download on the Apple App Store and Google Play Store."
    },
    {
        id: "faq-2",
        question: "Is data secure?",
        answer: "Yes, we follow strict privacy policies and use modern security technology to keep user data safe."
    },
    {
        id: "faq-3",
        question: "How do you ensure accessibility?",
        answer: "The app includes accessibility options so users can adjust fonts, colours and sizes for a better experience."
    },
    {
        id: "faq-4",
        question: "How can I report abuse?",
        answer: "You can report issues via the in-app report feature, contact admin through the contact form, or call support."
    },
    {
        id: "faq-5",
        question: "What should I do if I need help?",
        answer: "You can reach out through the help section in the app, contact support, or use the contact form for assistance."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-24 lg:py-32 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Frequently Asked <span className="text-[#6B2B77]">Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                        Everything you need to know about the AbleHub platform and community.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={item.id}
                                className={`border transition-all duration-300 rounded-2xl overflow-hidden ${isOpen
                                        ? 'border-primary-200 bg-primary-50/30 shadow-md'
                                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                            >
                                <h3>
                                    <button
                                        onClick={() => toggleItem(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`${item.id}-content`}
                                        id={`${item.id}-header`}
                                        className="flex text-left items-center justify-between w-full p-6 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-100 rounded-2xl"
                                    >
                                        <span className={`text-lg font-bold pr-8 ${isOpen ? 'text-primary-700' : 'text-slate-800'}`}>
                                            {item.question}
                                        </span>
                                        <span
                                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                                                }`}
                                            aria-hidden="true"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div
                                    id={`${item.id}-content`}
                                    role="region"
                                    aria-labelledby={`${item.id}-header`}
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="p-6 pt-0 text-slate-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
