import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        <Hero />

        {/* Removed Mission Placeholder as it was merged conceptually into Hero / Features */}

        <ScreenshotsCarousel />

        <HowItWorks />

        <Features />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
