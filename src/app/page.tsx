import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
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
        <ProblemSolution />
        <About />
        <ScreenshotsCarousel />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
