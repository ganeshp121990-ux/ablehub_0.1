export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Download & Setup",
            description: "Get the AbleHub app on your preferred device. Set your accessibility preferences in just a few taps to customize your experience immediately.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            )
        },
        {
            number: "02",
            title: "Join the Community",
            description: "Create your profile and connect with a supportive network. Discover local groups, events, and people who share your journey.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            number: "03",
            title: "Connect Safely",
            description: "Engage securely using our verified platform. Reach out to support agents or peers via accessible messaging and video features.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        How <span className="text-primary-600">AbleHub</span> Works
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                        A simple, streamlined process designed from the ground up to be fully accessible and incredibly easy to use.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[4.5rem] left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center p-6 lg:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300 group"
                        >
                            <div className="mb-8 relative">
                                <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 z-10 relative">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary-500 text-white font-bold flex items-center justify-center text-xs shadow-sm z-20">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
