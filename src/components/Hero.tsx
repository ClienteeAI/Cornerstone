import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-primary">
      {/* Background Image with Diagonal Cut */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0 hidden lg:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <video
          src="/kling_20260415_作品_Create_an__5048_0.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      {/* Mobile Background */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <video
          src="/kling_20260415_作品_Create_an__5048_0.mp4"
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      <div className="container mx-auto px-6 flex-grow flex flex-col justify-center relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/logos/gold.png" 
              alt="Cornerstone Marketing Logo" 
              className="h-32 md:h-48 w-auto object-contain mb-12"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold leading-tight mb-6">
              Přivádíme kapitál do <span className="text-gold italic">realitních projektů.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gold font-serif italic mb-4">
              Růst, který vydělává.
            </p>
            <p className="text-lg text-white/70 tracking-widest uppercase mb-10">
              Realitní projekty. Kapitál. Výkon.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-shiny-gold text-primary font-bold rounded-none px-8 py-6 text-lg btn-border-beam">
                Navázat spolupráci
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary font-bold rounded-none px-8 py-6 text-lg transition-all duration-300">
                Přidat se do týmu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Features Bar */}
      <div className="bg-primary/90 backdrop-blur-sm border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <TrendingUp className="text-gold w-10 h-10" />
              <div>
                <h3 className="text-white font-bold uppercase text-sm tracking-widest">Investiční projekty</h3>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-0 md:pl-8">
              <Building2 className="text-gold w-10 h-10" />
              <div>
                <h3 className="text-white font-bold uppercase text-sm tracking-widest">Development a Real Estate</h3>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-0 md:pl-8">
              <Users className="text-gold w-10 h-10" />
              <div>
                <h3 className="text-white font-bold uppercase text-sm tracking-widest">Příležitost pro obchodníky</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
