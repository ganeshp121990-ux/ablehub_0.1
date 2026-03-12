import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white min-h-[90vh] flex items-center"
        >
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content - Untouched */}
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
                            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5">
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[0.65rem] opacity-80">Download on the</span>
                                    <span className="text-lg font-semibold">App Store</span>
                                </div>
                            </a>
                            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5">
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[0.65rem] opacity-80">GET IT ON</span>
                                    <span className="text-lg font-semibold">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Cinematic iPhone Frame */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:h-[650px] flex justify-center items-center perspective-[1000px]">
                        
                        {/* Purple background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#6B2B77]/10 rounded-full blur-3xl -z-10"></div>

                        {/* The iPhone Frame (from SS 2) */}
                        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[4px] border-slate-800 transform rotate-[2deg] hover:rotate-0 transition-all duration-700">
                            
                            {/* The "Screen" area */}
                            <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden border border-slate-900">
                                
                                {/* The Notch (Speaker/Camera) */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

                                {/* YOUR APP SCREENSHOT HERE */}
                                <Image 
                                    src="/images/Home_Screen.png" // Replace with your "Explore Features" image
                                    alt="App Interface"
                                    fill
                                    className="object-top object-cover"
                                    priority
                                />
                                
                            </div>

                            {/* Home Bar */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-900/20 rounded-full z-20"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}