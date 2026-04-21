import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const points = [
  "Exkluzivní portfolio: Pracuješ s prémiovými nemovitostmi a investičními celky se skutečnou tržní hodnotou.",
  "Marketingová podpora: Zapomeň na cold calling. Dodáváme ti kvalifikovanou poptávku a silné zázemí.",
  "Profesní růst: Nabízíme systém pravidelného vzdělávání v oboru realit a moderního vyjednávání.",
  "Nadstandardní ohodnocení: Tvůj výdělek není zastropován a přímo odráží tvůj obchodní výkon.",
  "Špičkové zázemí: Pracuješ v týmu profesionálů v prostředí, které motivuje k nejlepším výsledkům.",
];

export default function Career() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Kariéra",
      title: "Vaše budoucnost s Cornerstone",
      content: (
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            Hledáme ambiciózní obchodníky, kteří chtějí překročit hranice běžného realitního trhu. V Cornerstone nehledáme jen zaměstnance, ale partnery pro naše exkluzivní projekty.
          </p>
          <p>
            Vaše role u nás není o hledání příležitostí, ale o jejich rozvíjení. Pracujete s klienty, kteří mají o naše projekty skutečný zájem.
          </p>
          <div className="p-6 bg-beige/10 border-l-4 border-gold italic mt-8 text-primary font-medium">
            "Naším cílem je vytvořit prostředí, kde obchodníci rostou společně s projekty, které zastupují."
          </div>
        </div>
      ),
    },
    {
      id: 2,
      tag: "Benefity",
      title: "Proč se k nám přidat?",
      content: (
        <div className="grid gap-4 mt-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg hover:bg-beige/5 transition-colors">
              <div className="mt-1 bg-gold/20 p-1 rounded-full">
                <CheckCircle2 className="text-gold flex-shrink-0" size={16} />
              </div>
              <span className="font-medium text-sm md:text-base text-primary/80">{point}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="kariera" className="py-24 bg-beige/5 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Carousel */}
          <div className="relative order-2 lg:order-1 h-[600px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-8 md:p-12 shadow-2xl border border-beige/30 relative flex flex-col h-full lg:h-auto overflow-y-auto lg:overflow-visible"
              >
                <div className="mb-6">
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                    {slides[currentSlide].tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                </div>
                
                {slides[currentSlide].content}

                {/* Progress Indicators */}
                <div className="flex gap-3 mt-12">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        idx === currentSlide ? "w-10 bg-gold" : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Minimal Nav Arrows */}
            <div className="absolute -bottom-16 right-0 flex gap-4">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-3 border border-primary/10 hover:bg-primary hover:text-white transition-all text-primary rounded-none"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-3 border border-primary/10 hover:bg-gold hover:text-primary transition-all text-primary rounded-none"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Side: Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2 group"
          >
            <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-4 translate-y-4" />
            <div className="relative overflow-hidden aspect-[4/5] shadow-2xl border border-beige/50">
              <img 
                src="/Man sitting by the desk.png" 
                alt="Cornerstone Professional Interior"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
