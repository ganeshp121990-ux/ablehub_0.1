import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Accessibility from "@/components/Accessibility";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import FAQ from "@/components/FAQ";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200">
      <Navigation />

      <main className="flex-grow">
        <Hero />
        <SocialProof />

        {/* Problem / Solution Section */}
        <ProblemSolution />

        {/* Features Showcase */}
        <Features />

        {/* Accessibility Live Demo Block */}
        <Accessibility />

        {/* Founder Story & Core Values */}
        <About />

        <ScreenshotsCarousel />

        {/* Keeping old components around as fallbacks for now, but not visible */}
        {/* <ScreenshotsCarousel /> */}
        {/* <FAQ /> */}

        {/* Contact form exists below the fold */}
        <Contact />

        <FAQ />

      </main>

      <Footer />
    </div>
  );
}
