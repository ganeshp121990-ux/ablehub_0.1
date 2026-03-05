import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 lg:py-24">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">


                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
                            <img
                                src="/Able_Logo.svg"
                                alt="AbleHub Logo"
                                width={260}
                                height={80}
                                className="w-64 md:w-72 lg:w-80 h-auto transition-transform duration-300"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            Building the internet's most profoundly accessible, secure, and supportive digital community space. Inclusive design isn't a feature; it's our foundation.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>


                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 tracking-wide">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#ProblemSolution" className="hover:text-white transition-colors">ProblemSolution</a></li>

                            <li><a href="#" className="hover:text-white transition-colors">For Organizations</a></li>
                        </ul>
                    </div>


                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">WCAG Statement</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>


                    <div className="lg:col-span-4 bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700/50">
                        <h4 className="text-white font-bold mb-3 tracking-wide">Monthly Updates</h4>
                        <p className="text-sm text-slate-400 mb-6">Join 10,000+ advocates receiving news on our accessibility roadmap.</p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>


                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <p className="flex items-center gap-1.5">
                        &copy; {currentYear} AbleHub Inc. Crafted with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for everyone.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
