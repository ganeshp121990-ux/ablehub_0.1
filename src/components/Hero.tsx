"use client"; // This fixes the 'client-only' build error

import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white min-h-[90vh] flex items-center"
        >
            {/* Inline Animation Styles - Now safe because of "use client" */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(2deg); }
                    50% { transform: translateY(-20px) rotate(1deg); }
                    100% { transform: translateY(0px) rotate(2deg); }
                }
                .animate-levitate {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content Side */}
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left transition-all duration-1000 ease-out">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide mb-8 border border-primary-100 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 animate-pulse"></span>
                            Empowering the NDIS Community
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            A New Way to Connect,<span className="text-[#6B2B77]">Explore and Belong.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Discover New Possibilities, Connect with your Community, and Explore Experiences that Help you Build Friendships, Grow in Confidence, and live a more Connected and Fulfilling life.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#download-apple"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5"
                                aria-label="Download on the App Store"
                            >
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[0.65rem] leading-none mb-1 opacity-80">Download on the</span>
                                    <span className="text-lg font-semibold leading-none">App Store</span>
                                </div>
                            </a>

                            <a
                                href="#download-google"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5"
                                aria-label="Get it on Google Play"
                            >
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[0.65rem] leading-none mb-1 opacity-80">GET IT ON</span>
                                    <span className="text-lg font-semibold leading-none">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Cinematic iPhone Frame with Floating Animation */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:h-[700px] flex justify-center items-center perspective-[1000px]">

                        {/* Purple glow background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#6B2B77]/5 rounded-full blur-[100px] -z-10"></div>

                        {/* iPhone Container with Floating Animation */}
                        <div className="relative w-[299px] h-[610px] bg-slate-900 rounded-[3.2rem] p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] border-slate-800 animate-levitate transition-all duration-500 hover:[animation-play-state:paused]">

                            {/* The Screen */}
                            <div className="relative w-full h-full bg-white rounded-[2.4rem] overflow-hidden border border-black shadow-inner">

                                {/* Camera Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-30"></div>

                                {/* Cinematic Screen Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none"></div>

                                {/* YOUR APP SCREENSHOT */}
                                <Image
                                    src="/images/Home_Screen.png" // Make sure this is in your /public folder
                                    alt="AbleHub App Interface"
                                    fill
                                    className="object-top object-cover"
                                    priority
                                />
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-slate-900/30 rounded-full z-30"></div>
                        </div>

                        {/* Dynamic Shadow underneath the phone */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/10 blur-2xl rounded-full scale-x-150 -z-20"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}