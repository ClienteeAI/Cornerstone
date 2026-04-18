import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const points = [
  "pracuješ s reálnými projekty, ne s „produktem bez hodnoty“",
  "máš k dispozici marketingovou podporu a přístup ke klientům",
  "aktivně pracuješ s klienty a rozvíjíš obchodní příležitosti",
  "výdělek je přímo navázaný na výkon",
  "prostředí, které podporuje růst a výsledky",
];

export default function Career() {
  return (
    <section id="kariera" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Kariéra</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Příležitost pro obchodníky</h2>
            <div className="space-y-6 text-lg text-gray-600 mb-10">
              <p>
                Budujeme obchodní tým, který pracuje s prémiovými developerskými projekty a má k dispozici marketingovou podporu i přístup ke klientům.
              </p>
              <p>
                Hledáme lidi, kteří chtějí růst, pracovat na sobě a vydělávat podle svého výkonu.
              </p>
              <p className="font-bold text-primary">
                Příležitost je otevřená i pro nováčky — rádi tě zaškolíme a pomůžeme ti nastartovat kariéru v obchodu.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/10 -rotate-2 z-0"></div>
            <div className="relative z-10 bg-primary p-8 md:p-12 text-white">
              <div className="grid gap-6">
                {points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={24} />
                    <span className="font-medium text-lg">{point}</span>
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
