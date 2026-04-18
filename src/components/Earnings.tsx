import { motion } from "motion/react";
import { CheckCircle2, TrendingUp } from "lucide-react";

const points = [
  "kombinace fixního ohodnocení a provizí",
  "výdělek roste s objemem obchodů",
  "žádný pevný strop příjmu",
  "možnost rychlého růstu příjmů",
  "výkon je přímo odměněný",
];

export default function Earnings() {
  return (
    <section className="py-24 bg-beige/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Odměňování</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Výdělek bez limitu</h2>
            <p className="text-xl text-gray-600">
              Odměna je přímo navázaná na výkon a objem uzavřených obchodů.
              Kromě provizí nabízíme i zajímavé fixní ohodnocení jako stabilní základ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 border-l-4 border-gold shadow-sm"
                >
                  <CheckCircle2 className="text-gold flex-shrink-0" size={24} />
                  <span className="text-primary font-bold text-lg">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary p-12 text-center text-white relative overflow-hidden"
            >
              <TrendingUp className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
              <div className="relative z-10">
                <h3 className="text-gold text-6xl font-bold mb-4">∞</h3>
                <p className="text-2xl font-serif italic text-gold mb-4">Neomezený potenciál</p>
                <p className="text-white/70">
                  Váš příjem závisí pouze na vašich výsledcích a ambicích.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
