import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Marketing přivádí kontakty",
    description: "Náš systém generuje kvalitní poptávku po realitních projektech.",
  },
  {
    number: "02",
    title: "Obchodník pracuje s klienty",
    description: "Vy přebíráte kontakt a provázíte klienta celým procesem.",
  },
  {
    number: "03",
    title: "Uzavírá obchod",
    description: "Díky kvalitní podpoře a vaší práci dochází k finálnímu podpisu.",
  },
  {
    number: "04",
    title: "Vydělává",
    description: "Za každý uzavřený obchod získáváte nadstandardní provizi.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Proces</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Jak funguje spolupráce</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Spolupráce je postavená na jasném systému, kde má každý svou roli.
            Marketing přivádí poptávku a obchodník uzavírá obchody.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-gold text-primary font-serif font-bold text-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
