'use client';

import { useState, useEffect, useCallback, useRef } from 'react';


function LiveAnnouncer({ message }: { message: string }) {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
        >
            {message}
        </div>
    );
}

export default function AccessibilityPanel() {
    const [isOpen, setIsOpen] = useState(false);
    const [announcement, setAnnouncement] = useState('');


    const [settings, setSettings] = useState({
        largeText: false,
        highContrast: false,
        dyslexia: false,
        reducedMotion: false,
    });

    const panelRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);


    const applySettings = useCallback((newSettings: typeof settings) => {
        const html = document.documentElement;

        if (newSettings.largeText) html.classList.add('a11y-large-text');
        else html.classList.remove('a11y-large-text');

        if (newSettings.highContrast) html.classList.add('a11y-high-contrast');
        else html.classList.remove('a11y-high-contrast');

        if (newSettings.dyslexia) html.classList.add('a11y-dyslexia');
        else html.classList.remove('a11y-dyslexia');

        if (newSettings.reducedMotion) html.classList.add('a11y-reduced-motion');
        else html.classList.remove('a11y-reduced-motion');


        try {
            localStorage.setItem('ablehub-a11y-settings', JSON.stringify(newSettings));
        } catch (e) {
            console.warn("Could not save to localStorage", e);
        }
    }, []);


    useEffect(() => {
        try {
            const saved = localStorage.getItem('ablehub-a11y-settings');
            if (saved) {
                const parsed = JSON.parse(saved);
                setSettings(parsed);
                applySettings(parsed);
            }
        } catch (e) {
            console.warn("Could not load from localStorage", e);
        }
    }, [applySettings]);

    const announce = (message: string) => {
        setAnnouncement('');

        setTimeout(() => setAnnouncement(message), 50);
    };

    const toggleSetting = (key: keyof typeof settings, label: string) => {
        setSettings(prev => {
            const next = { ...prev, [key]: !prev[key] };
            applySettings(next);
            announce(`${label} ${next[key] ? 'enabled' : 'disabled'}.`);
            return next;
        });
    };

    const resetAll = () => {
        const next = {
            largeText: false,
            highContrast: false,
            dyslexia: false,
            reducedMotion: false,
        };
        setSettings(next);
        applySettings(next);
        announce("All accessibility settings reset to default.");
    };


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                buttonRef.current?.focus();
                announce("Accessibility panel closed.");
            }


            if (isOpen && e.key === 'Tab' && panelRef.current) {
                const focusableElements = panelRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );

                const firstElement = focusableElements[0] as HTMLElement;
                const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);


    useEffect(() => {
        if (isOpen && panelRef.current) {
            const closeBtn = panelRef.current.querySelector('[data-close-btn]') as HTMLElement;
            if (closeBtn) {
                closeBtn.focus();
                announce("Accessibility panel opened.");
            }
        }
    }, [isOpen]);

    const togglePanel = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            announce("Accessibility panel closed.");
        }
    };

    return (
        <>
            <LiveAnnouncer message={announcement} />


            <button
                ref={buttonRef}
                onClick={togglePanel}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-primary-800 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2"
                aria-expanded={isOpen}
                aria-controls="a11y-panel"
                aria-label="Toggle Accessibility Menu"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
            </button>


            <div
                className={`fixed inset-0 bg-slate-900/10 backdrop-blur-[1px] z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => {
                    setIsOpen(false);
                    buttonRef.current?.focus();
                }}
                aria-hidden="true"
            />


            <div
                id="a11y-panel"
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Accessibility Settings"
                className={`fixed bottom-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 transform transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-12 sm:translate-y-8 opacity-0 invisible'
                    }`}
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">Accessibility</h2>
                    <button
                        data-close-btn
                        onClick={() => {
                            setIsOpen(false);
                            buttonRef.current?.focus();
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label="Close panel"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="space-y-4 mb-8">
                    <ToggleItem
                        label="Increase Text Size"
                        isActive={settings.largeText}
                        onClick={() => toggleSetting('largeText', 'Large text')}
                        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M9 9h6"></path><path d="M12 6v6"></path><path d="M4 14h16"></path></svg>}
                    />
                    <ToggleItem
                        label="High Contrast"
                        isActive={settings.highContrast}
                        onClick={() => toggleSetting('highContrast', 'High contrast mode')}
                        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path></svg>}
                    />
                    <ToggleItem
                        label="Reduced Motion"
                        isActive={settings.reducedMotion}
                        onClick={() => toggleSetting('reducedMotion', 'Reduced motion')}
                        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>}
                    />
                    <ToggleItem
                        label="Dyslexia Friendly Font"
                        isActive={settings.dyslexia}
                        onClick={() => toggleSetting('dyslexia', 'Dyslexia friendly font')}
                        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>}
                    />
                </div>

                <button
                    onClick={resetAll}
                    className="w-full py-4 text-center rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                    Reset Settings
                </button>
            </div>
        </>
    );
}


function ToggleItem({
    label,
    isActive,
    onClick,
    icon
}: {
    label: string;
    isActive: boolean;
    onClick: () => void;
    icon: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            aria-pressed={isActive}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-1 ${isActive
                ? 'bg-secondary-50 border-secondary-200 shadow-sm'
                : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                }`}
        >
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${isActive ? 'bg-secondary-100 text-secondary-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                    {icon}
                </div>
                <span className={`font-semibold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                    {label}
                </span>
            </div>


            <div className={`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${isActive ? 'bg-secondary-500' : 'bg-slate-200'
                }`}>
                <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${isActive ? 'translate-x-6' : 'translate-x-0'
                    }`} />
            </div>
        </button>
    );
}
