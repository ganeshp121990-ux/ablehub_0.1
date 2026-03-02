import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white min-h-[90vh] flex items-center"
        >
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Content */}
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide mb-8 border border-primary-100 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 animate-pulse"></span>
                            Accessible Healthcare Platform
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight text-balance">
                            Bridging the gap to <span className="text-primary-600">inclusive care.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                            Connect with a community that understands you. AbleHub ensures an accessible, safe, and empowering journey for everyone.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            {/* App Store Badge Equivalent */}
                            <a
                                href="#download-apple"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5"
                                aria-label="Download on the App Store"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 14.363c0-3.35 2.724-4.8 2.842-4.885-1.565-2.28-3.98-2.583-4.838-2.618-2.052-.206-4.015 1.205-5.053 1.205-1.05 0-2.65-1.183-4.346-1.15-2.203.042-4.237 1.28-5.362 3.235-2.28 3.948-.582 9.775 1.63 12.96 1.082 1.558 2.378 3.322 4.053 3.255 1.62-.072 2.228-1.05 4.197-1.05 1.954 0 2.505 1.05 4.197 1.015 1.745-.04 2.87-1.63 3.93-3.175 1.22-1.785 1.72-3.522 1.747-3.614-.04-.015-3.385-1.298-3.4-5.178h-.598zM14.925 5.253c.902-1.09 1.51-2.613 1.34-4.133-1.305.05-2.887.868-3.816 1.953-.83.953-1.556 2.502-1.36 3.996 1.458.113 2.924-.72 3.836-1.816z" /></svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[0.65rem] leading-none mb-1 opacity-80">Download on the</span>
                                    <span className="text-lg font-semibold leading-none">App Store</span>
                                </div>
                            </a>
                            {/* Google Play Badge Equivalent */}
                            <a
                                href="#download-google"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5"
                                aria-label="Get it on Google Play"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.71 1.71 0 01-.11-.645V2.46c0-.236.042-.457.11-.646zM4.606 1.15l10.395 6.002-1.002 1.003L4.606 1.15zm10.584 7.153l4.632 2.674c1.171.676 1.171 1.77 0 2.446l-4.632 2.674-1.768-1.768 3.536-2.046-3.536-2.046 1.768-1.768zM4.606 22.85l9.393-7.002 1.002 1.003-10.395 6z" /></svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[0.65rem] leading-none mb-1 opacity-80">GET IT ON</span>
                                    <span className="text-lg font-semibold leading-none">Google Play</span>
                                </div>
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>
                            <p>Join our growing community</p>
                        </div>
                    </div>

                    {/* Visual / Mockup */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:h-[600px] flex justify-center perspective-[1000px] transition-all duration-1000 delay-200 ease-out transform translate-y-0 opacity-100">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-200/40 rounded-full blur-3xl -z-10"></div>

                        <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out flex-shrink-0">
                            {/* Screen */}
                            <div className="relative w-full h-full bg-slate-50 rounded-[2.75rem] overflow-hidden border border-slate-800 flex flex-col pt-12 px-5 pb-6">
                                {/* Dynamic Island / Notch placeholder */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-20"></div>

                                {/* Abstract UI Elements */}
                                <div className="w-full flex justify-between items-center mb-8 mt-2">
                                    <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </div>
                                </div>

                                <div className="w-2/3 h-8 bg-slate-200 rounded-lg mb-2"></div>
                                <div className="w-1/2 h-4 bg-slate-200 rounded-md mb-8"></div>

                                <div className="space-y-4 flex-1">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-full h-24 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex gap-4 items-center hover:-translate-y-1 transition-transform" style={{ transitionDelay: `${i * 100}ms` }}>
                                            <div className="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center shrink-0">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <div className="w-3/4 h-3 bg-slate-200 rounded-full"></div>
                                                <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Bottom Nav Placeholder */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-slate-900 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
