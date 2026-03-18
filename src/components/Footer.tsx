import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 lg:py-24">
            <div className="container mx-auto px-6 max-w-3x1">

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





                </div>


                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
  <p className="flex items-center gap-1.5">
    &copy; {currentYear} AbleHub Inc. Crafted with{" "}
    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for everyone.
  </p>

  <div className="flex gap-6">
    <Link href="/privacy-policy" className="hover:text-white transition-colors">
      Privacy Policy
    </Link>

    <Link href="/terms-of-service" className="hover:text-white transition-colors">
      Terms of Service
    </Link>


  </div>
</div>

            </div>
        </footer>
    );
}
