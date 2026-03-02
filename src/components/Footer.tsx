export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-100 py-12 lg:py-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6 group" aria-label="AbleHub Home">
                            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary-500 group-hover:scale-105 transition-transform duration-300">
                                <path d="M4 28C14 16 26 16 36 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                <path d="M12 26V12M28 26V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                <path d="M12 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="20" cy="22" r="2.5" fill="currentColor" />
                                <path d="M20 24.5V30M18 30L20 26L22 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex flex-col justify-center">
                                <span className="text-xl font-extrabold tracking-tight text-primary-700 leading-none font-sans" style={{ letterSpacing: '-0.05em' }}>ablehub</span>
                                <span className="text-[0.4rem] font-bold tracking-[0.1em] text-primary-900 leading-none mt-0.5 uppercase">Bridging Community Together</span>
                            </div>
                        </a>
                        <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                            Empowering individuals through an accessible, secure, and supportive health-tech community.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders fully accessible */}
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Follow us on Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.72-.95.56-2 1-3.1 1.22-.9-.96-2.18-1.56-3.59-1.56-2.7 0-4.9 2.2-4.9 4.9 0 .38.04.76.13 1.12C7.69 8.09 4.07 6.13 1.64 3.16c-.42.72-.66 1.56-.66 2.45 0 1.7.87 3.2 2.18 4.08-.8-.03-1.56-.25-2.22-.61v.06c0 2.37 1.69 4.35 3.93 4.8-.41.11-.85.17-1.29.17-.32 0-.63-.03-.93-.09.62 1.95 2.43 3.37 4.57 3.41-1.68 1.31-3.8 2.09-6.1 2.09-.39 0-.78-.02-1.16-.07 2.17 1.38 4.74 2.19 7.48 2.19 8.97 0 13.88-7.44 13.88-13.88 0-.21 0-.42-.01-.63.95-.69 1.78-1.55 2.43-2.52z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Connect with us on LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+18005551234" className="text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary-50 flex items-center justify-center transition-colors">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    1-800-555-1234
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@ablehub.app" className="text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary-50 flex items-center justify-center transition-colors">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    hello@ablehub.app
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-4">
                            <li><a href="#how-it-works" className="text-slate-500 hover:text-primary-600 transition-colors">How it Works</a></li>
                            <li><a href="#features" className="text-slate-500 hover:text-primary-600 transition-colors">Accessibility Features</a></li>
                            <li><a href="#faqs" className="text-slate-500 hover:text-primary-600 transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">
                        &copy; {currentYear} AbleHub Community. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">Terms of Service</a>
                        <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">Accessibility Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
