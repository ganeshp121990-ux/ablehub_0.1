'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validate = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-[3rem] p-8 md:p-14 lg:p-20 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 lg:gap-20">

                    <div className="w-full md:w-5/12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold tracking-wide mb-6 border border-secondary-100 self-start">
                            Get in Touch
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            We'd love to hear from <span className="text-primary-600">you.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed text-balance">
                            Have questions about accessibility features, partnerships, or investor relations? Our team is ready to help.
                        </p>
                        <div className="space-y-6">
                            <a href="mailto:hello@ablehub.app" className="flex items-center gap-4 text-slate-700 hover:text-primary-600 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium">Email Us</div>
                                    <div className="font-semibold">hello@ablehub.app</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-7/12">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            {isSuccess && (
                                <div
                                    className="bg-secondary-50 border border-secondary-200 text-secondary-800 p-4 rounded-xl flex gap-3 items-start animate-fade-in-up"
                                    role="alert"
                                    aria-live="polite"
                                >
                                    <svg className="shrink-0 w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <strong className="block font-bold">Message sent securely!</strong>
                                        <span className="text-sm">Thank you for reaching out. We will respond shortly.</span>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Display Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-primary-500 focus:ring-primary-100'} text-slate-900 focus:outline-none focus:ring-4 transition-all`}
                                    placeholder="Jane Doe"
                                    aria-invalid={errors.name ? "true" : "false"}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-primary-500 focus:ring-primary-100'} text-slate-900 focus:outline-none focus:ring-4 transition-all`}
                                    placeholder="jane@example.com"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.message ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:border-primary-500 focus:ring-primary-100'} text-slate-900 focus:outline-none focus:ring-4 transition-all resize-none`}
                                    placeholder="Share your thoughts..."
                                    aria-invalid={errors.message ? "true" : "false"}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                ></textarea>
                                {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 shadow-md transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2"
                                aria-live="polite"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Sending Securely...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
