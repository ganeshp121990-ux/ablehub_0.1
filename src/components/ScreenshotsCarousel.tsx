'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const mockups = [
    {
        id: 1,
        title: "Login",
        description: "Securely access your AbleHub account anytime.",
        image: "/images/Login.png"
    },
    {
        id: 2,
        title: "Support Worker",
        description: "Empower participants with care and meaningful support.",
        image: "/images/Support_Worker.png"
    },
    {
        id: 3,
        title: "Support Provider",
        description: "Manage services and connect with participants easily.",
        image: "/images/Support_Provider.png"
    },
    {
        id: 4,
        title: "Business Owner",
        description: "Grow engagement and offer valuable community solutions.",
        image: "/images/Business_Owner.png"
    },
    {
        id: 5,
        title: "NDIS Participant",
        description: "Be able to explore activities, reduce boredom and enjoy supportive experiences.",
        image: "/images/NDIS_Participants.png"
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

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setTouchStart(e.touches[0].clientX);

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchStart === null) return;
        const touchEnd = e.changedTouches[0].clientX;

        if (touchStart - touchEnd > 50) nextSlide();
        if (touchStart - touchEnd < -50) prevSlide();

        setTouchStart(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    };

    return (
        <section
            id="screenshots"
            className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        One App for Everyone <span className="text-[#6B2B77]">for Everything.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                        Connecting participants, support workers and businesses.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 w-full">

                    {/* LEFT TEXT INDICATORS */}
                    <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 lg:w-1/3 z-20">

                        {mockups.map((mockup, idx) => (
                            <button
                                key={mockup.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`text-left p-4 md:p-6 rounded-2xl transition-all duration-300 border-2 ${activeIndex === idx
                                    ? 'bg-white border-primary-500 shadow-xl lg:scale-105 transform'
                                    : 'bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200 opacity-60'
                                    }`}
                            >
                                <h3 className={`text-lg md:text-xl font-bold mb-1 md:mb-2 ${activeIndex === idx ? 'text-primary-700' : 'text-slate-800'
                                    }`}>
                                    0{idx + 1}. {mockup.title}
                                </h3>

                                <p className={`text-sm ${activeIndex === idx ? 'text-slate-600' : 'text-slate-500'
                                    }`}>
                                    {mockup.description}
                                </p>
                            </button>
                        ))}

                    </div>


                    {/* PHONE MOCKUP */}
                    <div
                        className="relative perspective-[1000px] z-10 mx-auto"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-400/20 rounded-full blur-3xl -z-10"></div>


                        {/* PHONE FRAME */}
                        <div className="relative w-[280px] md:w-[300px] lg:w-[340px] aspect-[9/19.5] bg-slate-900 rounded-[3rem] p-3 shadow-2xl mx-auto flex-shrink-0">

                            <div className="relative w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden border border-slate-800 flex flex-col pt-8">

                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-full z-30"></div>


                                {/* SLIDER */}
                                <div className="relative w-full flex-1 overflow-hidden">

                                    {mockups.map((mockup, idx) => (
                                        <div
                                            key={mockup.id}
                                            className="absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                            style={{
                                                opacity: activeIndex === idx ? 1 : 0,
                                                zIndex: activeIndex === idx ? 20 : 10,
                                                transform: `translateX(${(idx - activeIndex) * 100}%)`,
                                            }}
                                        >
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={mockup.image}
                                                    alt={mockup.title}
                                                    fill
                                                    className="object-contain bg-black"
                                                    sizes="(max-width:768px) 280px, (max-width:1024px) 300px, 340px"
                                                    priority={idx === 0}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-slate-300 rounded-full z-30"></div>

                            </div>
                        </div>


                        {/* ARROWS */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-12 z-20">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition"
                            >
                                ◀
                            </button>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-12 z-20">
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition"
                            >
                                ▶
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}