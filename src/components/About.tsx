import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const points = [
  "zaměření na developerské a realitní projekty",
  "generování poptávky a práce s klienty",
  "podpora obchodních týmů a jejich výkonu",
  "systém postavený na reálných výsledcích, ne teorii",
  "dlouhodobý přístup a stabilní zázemí",
  "propojení marketingu a obchodu",
];

export default function About() {
  return (
    <section id="o-nas" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-4 translate-y-4" />
            <div className="relative aspect-[4/5] overflow-hidden border border-beige/50">
              <img 
                src="/founder.png" 
                alt="Zakladatel Cornerstone Marketing" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm border-l-4 border-gold shadow-xl">
              <p className="text-primary font-serif italic text-lg mb-0">"Marketing a obchod musí mluvit stejným jazykem."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">O nás</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Marketing, který propojuje kapitál s realitními projekty.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 mb-10">
              <p>
                Zaměřujeme se na marketing developerských a realitních projektů, kde je klíčová důvěra, výkon a schopnost pracovat s klienty ve větším objemu.
              </p>
              <p>
                Propojujeme marketing a obchod do jednoho funkčního systému, který firmám pomáhá růst a obchodníkům vytváří prostor pro nadstandardní výdělky.
              </p>
            </div>

            <div className="bg-beige/20 p-8 md:p-10 border border-beige/50">
              <div className="grid sm:grid-cols-2 gap-6">
                {points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-primary font-medium text-base leading-tight">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
