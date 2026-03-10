import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import FAQ from "@/components/FAQ";
import Script from "next/script";



export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AbleHub",
    url: "https://ablehub.com.au",
    logo: "https://ablehub.com.au/favicon.ico",
    sameAs: [
      "https://www.linkedin.com",
      "https://www.facebook.com"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
