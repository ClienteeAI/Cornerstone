import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Earnings from "@/components/Earnings";
import HowItWorks from "@/components/HowItWorks";
import ClientWork from "@/components/ClientWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-gold selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Career />
        <Earnings />
        <HowItWorks />
        <ClientWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
