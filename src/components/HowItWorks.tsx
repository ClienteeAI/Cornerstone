import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Generování kontaktů",
    description: "Náš marketingový tým vytváří cílené kampaně, díky kterým dlouhodobě získáváme databáze potenciálních klientů se zájmem o realitní projekty.",
  },
  {
    number: "02",
    title: "Kvalifikovaný obchod",
    description: "Jako obchodník přebíráš tyto kontakty a aktivně s nimi pracuješ — oslovuješ klienty, zjišťuješ jejich situaci a představuješ možnosti spolupráce.\n\nKlienta provázíš celým procesem od prvního kontaktu až po finální rozhodnutí, s podporou podkladů, vizualizací a zázemí týmu.",
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
    <section className="py-24 relative overflow-hidden bg-white text-primary">
      {/* Clearly Visible Building Silhouette Background - Height adjusted to keep title on white */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] z-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Building Silhouette"
          className="w-full h-full object-cover object-bottom scale-110 grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Proces</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#163E32]">Jak funguje spolupráce</h2>
          <p className="text-xl text-[#163E32]/70 max-w-2xl mx-auto leading-relaxed mt-16 font-medium">
            Spolupráce je postavená na jasném systému, kde má každý svou roli.
            Marketing přivádí poptávku a obchodník uzavírá obchody.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-px bg-[#163E32]/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white border border-gold/40 text-[#163E32] font-serif font-bold text-3xl flex items-center justify-center mb-8 group-hover:bg-[#163E32] group-hover:text-white group-hover:border-[#163E32] group-hover:scale-110 transition-all duration-500 shadow-lg relative">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors"></div>
                <span className="relative z-10">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#163E32] tracking-wide">{step.title}</h3>
              <p className="text-[#163E32]/60 leading-relaxed font-normal whitespace-pre-line">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
