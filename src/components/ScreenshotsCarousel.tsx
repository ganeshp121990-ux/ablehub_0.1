'use client';

import { useState, useEffect, useRef } from 'react';

const mockups = [
    {
        id: 1,
        title: "Personal Dashboard",
        content: (
            <div className="flex flex-col h-full bg-slate-50">
                <div className="bg-primary-600 text-white p-6 pb-8 rounded-b-3xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/50"></div>
                            <div>
                                <div className="text-xs text-primary-100 font-medium tracking-wide uppercase">Welcome back</div>
                                <div className="font-semibold text-lg">Alex Carter</div>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
                            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary-400 rounded-full"></span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                        <div className="text-primary-100 text-sm mb-1">Upcoming Appointment</div>
                        <div className="font-semibold text-xl mb-3">Therapy Session</div>
                        <div className="flex gap-2">
                            <span className="text-xs bg-white text-primary-700 px-2 py-1 rounded-md font-medium">Tomorrow, 10:00 AM</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-5 -mt-4 space-y-4 overflow-hidden relative">
                    <div className="flex justify-between items-center z-10 relative">
                        <h3 className="font-bold text-slate-800">Quick Actions</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 z-10 relative">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                            <span className="text-sm font-medium text-slate-700">Payments</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
                            <span className="text-sm font-medium text-slate-700">Messages</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mt-2 z-10 relative">
                        <h3 className="font-bold text-slate-800 mb-3 text-sm">Recent Activity</h3>
                        <div className="space-y-3">
                            {[1, 2].map(i => (
                                <div key={i} className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="h-2.5 w-full bg-slate-200 rounded-full mb-1"></div>
                                        <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Community Map",
        content: (
            <div className="flex flex-col h-full bg-slate-50 relative">
                <div className="absolute inset-0 bg-slate-200 overflow-hidden">
                    {/* Abstract Map Grid */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>
                    {/* Map Pins */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary-600 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-white"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path></svg></div>
                    <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary-500 rounded-full shadow-md border-2 border-white"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-primary-400 rounded-full shadow-md border-2 border-white"></div>
                </div>
                <div className="z-10 p-5 mt-auto">
                    <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                        <h3 className="font-bold text-slate-800 text-lg mb-1">Local Support Group</h3>
                        <p className="text-slate-500 text-sm mb-4">Downtown Center • 2.5 miles away</p>
                        <button className="w-full bg-primary-600 text-white py-3 rounded-xl font-medium shadow-sm active:scale-95 transition-transform">Join Event</button>
                    </div>
                </div>
                <div className="absolute top-0 w-full p-5 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
                    <div className="bg-white rounded-full shadow-sm border border-slate-200 px-4 py-3 flex gap-3 text-slate-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <span className="text-sm">Search area...</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "Accessibility Profile",
        content: (
            <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b border-slate-100 flex items-center justify-center relative">
                    <button className="absolute left-6 text-slate-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
                    <h2 className="font-bold text-slate-800">Accessibility Profile</h2>
                </div>
                <div className="p-6 space-y-6 overflow-y-auto">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wider text-primary-600">Visual Preferences</h3>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                            <span className="font-medium text-slate-700">High Contrast Mode</span>
                            <div className="w-12 h-6 bg-primary-600 rounded-full relative shadow-inner">
                                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                            <span className="font-medium text-slate-700">Large Text</span>
                            <div className="w-12 h-6 bg-slate-200 rounded-full relative shadow-inner">
                                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wider text-secondary-600">Audio/Motion</h3>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                            <span className="font-medium text-slate-700">Screen Reader Optimized</span>
                            <div className="w-12 h-6 bg-primary-600 rounded-full relative shadow-inner">
                                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                            <span className="font-medium text-slate-700">Reduce Motion</span>
                            <div className="w-12 h-6 bg-slate-200 rounded-full relative shadow-inner">
                                <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Secure Messaging",
        content: (
            <div className="flex flex-col h-full bg-slate-50">
                <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">SA</div>
                    <div>
                        <div className="font-bold text-slate-800 leading-tight">Support Agent</div>
                        <div className="text-xs text-secondary-600 font-medium">Online</div>
                    </div>
                    <div className="ml-auto w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </div>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-hidden flex flex-col justify-end pb-0">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 self-start max-w-[85%]">
                        <p className="text-sm text-slate-700">Hello! How can I assist you with your accessibility settings today?</p>
                        <span className="text-[0.65rem] text-slate-400 mt-1 block">10:42 AM</span>
                    </div>
                    <div className="bg-primary-600 p-3 rounded-2xl rounded-tr-sm shadow-sm text-white self-end max-w-[85%]">
                        <p className="text-sm">I need help enabling the screen reader support in the app.</p>
                        <span className="text-[0.65rem] text-primary-200 mt-1 block text-right">10:45 AM</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 self-start max-w-[85%]">
                        <p className="text-sm text-slate-700">Sure thing! Simply go to your profile, tap on "Accessibility", and you'll find the toggle right at the top.</p>
                        <span className="text-[0.65rem] text-slate-400 mt-1 block">10:46 AM</span>
                    </div>
                </div>
                <div className="p-4 bg-white mt-4 border-t border-slate-100 rounded-b-[2.75rem]">
                    <div className="bg-slate-100 rounded-full px-4 py-3 flex gap-3 text-slate-400 items-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                        <span className="text-sm flex-1">Type a message...</span>
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white p-1.5 shadow-sm">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export default function ScreenshotsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % mockups.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + mockups.length) % mockups.length);

    useEffect(() => {
        if (!isHovered) {
            autoPlayRef.current = setInterval(() => {
                nextSlide();
            }, 4000);
        }
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isHovered]);

    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStart - touchEnd > 50) nextSlide();
        if (touchStart - touchEnd < -50) prevSlide();
        setTouchStart(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    };

    return (
        <section
            id="screenshots"
            className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Designed for <span className="text-primary-600">everyone.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                        Explore a premium cross-platform experience that prioritizes accessibility without compromising on modern design and power.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Text Indicators (Desktop) */}
                    <div className="hidden lg:flex flex-col gap-6 w-1/3">
                        {mockups.map((mockup, idx) => (
                            <button
                                key={mockup.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${activeIndex === idx
                                        ? 'bg-white border-primary-500 shadow-xl scale-105 transform'
                                        : 'bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200 opacity-60'
                                    }`}
                                aria-label={`Show ${mockup.title}`}
                                aria-current={activeIndex === idx ? "true" : "false"}
                            >
                                <h3 className={`text-xl font-bold mb-2 ${activeIndex === idx ? 'text-primary-700' : 'text-slate-800'}`}>0{idx + 1}. {mockup.title}</h3>
                                <p className={`text-sm ${activeIndex === idx ? 'text-slate-600' : 'text-slate-500'}`}>
                                    Experience the sleek, intuitive flow specially crafted for maximum usability and inclusive interactions.
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Carousel Device Frame */}
                    <div
                        className="relative perspective-[1000px] z-10 mx-auto"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        aria-label="App Screenshots Carousel. Use arrow keys to navigate."
                        role="region"
                        aria-roledescription="carousel"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-400/20 rounded-full blur-3xl -z-10"></div>

                        {/* Phone Bezel */}
                        <div className="relative w-[300px] md:w-[340px] aspect-[9/19.5] bg-slate-900 rounded-[3rem] p-3 shadow-2xl mx-auto flex-shrink-0">
                            {/* Screen Area */}
                            <div className="relative w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden border border-slate-800 flex flex-col pt-8">
                                {/* Dynamic Island Placeholder */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-full z-30"></div>

                                {/* Content Slider */}
                                <div className="relative w-full flex-1 overflow-hidden" style={{ minHeight: 'calc(100% - 24px)' }}>
                                    {mockups.map((mockup, idx) => (
                                        <div
                                            key={mockup.id}
                                            className="absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                            style={{
                                                opacity: activeIndex === idx ? 1 : 0,
                                                zIndex: activeIndex === idx ? 20 : 10,
                                                transform: `translateX(${(idx - activeIndex) * 100}%) scale(${activeIndex === idx ? 1 : 0.95})`,
                                                visibility: Math.abs(idx - activeIndex) > 1 ? 'hidden' : 'visible'
                                            }}
                                            aria-hidden={activeIndex !== idx}
                                        >
                                            {mockup.content}
                                        </div>
                                    ))}
                                </div>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-slate-300 rounded-full z-30"></div>
                            </div>
                        </div>

                        {/* Manual Controls (Arrow Buttons) */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12 z-20">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-800 hover:text-primary-600 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-primary-100"
                                aria-label="Previous screenshot"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12 z-20">
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-800 hover:text-primary-600 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-primary-100"
                                aria-label="Next screenshot"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Mobile/Tablet Dots Indicator */}
                <div className="lg:hidden flex justify-center gap-3 mt-12" role="tablist" aria-label="Slides">
                    {mockups.map((_, idx) => (
                        <button
                            key={idx}
                            role="tab"
                            aria-selected={activeIndex === idx}
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                                    ? 'w-8 bg-primary-600 shadow-md'
                                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
