import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Generování Leadů",
    description: "Náš marketingový tým oslovuje bonitní klientelu prostřednictvím cílených kampaní. Každý kontakt je prověřen a připraven na obchodní jednání.",
  },
  {
    number: "02",
    title: "Kvalifikovaný Obchod",
    description: "Jako specialista přebíráte kontakt a provázíte klienta investičním procesem. Máte k dispozici veškeré vizualizace a podklady pro špičkovou prezentaci.",
  },
  {
    number: "03",
    title: "Finalizace Transakce",
    description: "Poskytujeme vám plnou administrativní a právní podporu, aby prodej proběhl hladce. Vaším úkolem je budování důvěry a spokojenost klienta.",
  },
  {
    number: "04",
    title: "Profit a Růst",
    description: "Po uzavření obchodu získáváte transparentní odměnu. Úspěšní obchodníci u nás budují dlouhodobou kariéru a podílejí se na velkých projektech.",
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
