'use client';

import { useState } from 'react';

const faqItems = [
    {
        id: "faq-0",
        question: "Who can join AbleHub?",
        answer: "AbleHub is designed for everyone, with a special focus on individuals seeking an accessible, inclusive, and supportive health-tech community. Whether you have specific accessibility needs or simply value a safe and calm platform, you are welcome here."
    },
    {
        id: "faq-1",
        question: "Is it free to use?",
        answer: "Yes, joining the community and accessing core features is entirely free. We do offer premium features for advanced personalized health management, but our fundamental support network will always remain accessible without cost."
    },
    {
        id: "faq-2",
        question: "Is the platform safe?",
        answer: "Safety is our top priority. We employ strict identity verification, active community moderation, and secure underlying architecture to ensure that every interaction on AbleHub is secure and respectful."
    },
    {
        id: "faq-3",
        question: "How do you ensure accessibility?",
        answer: "Our app is built from the ground up to exceed WCAG AA standards. We support native screen readers, high-contrast modes, dynamic text sizing, and reduced motion settings, allowing you to tailor the experience to your exact needs."
    },
    {
        id: "faq-4",
        question: "How is my data protected?",
        answer: "Your health and personal data are encrypted end-to-end. We comply with major international privacy regulations, meaning your information is never sold to third parties and is only shared with your explicit consent."
    },
    {
        id: "faq-5",
        question: "How can I report abuse?",
        answer: "You can report any concerning behavior directly from a user's profile, within a message thread, or by contacting our 24/7 moderation team. Reports are handled confidentially and urgently."
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
                        Frequently Asked <span className="text-primary-600">Questions</span>
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
