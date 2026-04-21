import { motion } from "motion/react";
import { Home, PlusCircle, Clock } from "lucide-react";

const projectTypes = [
  {
    title: "Rezidenční development",
    description: "Specializujeme se na exkluzivní bytové domy a rezidenční čtvrti. Zajišťujeme kompletní marketingové pokrytí od prvního výkopu až po předání klíčů posledním majitelům.",
    icon: Home,
  },
  {
    title: "Investiční celky",
    description: "Strategicky propojujeme rozsáhlé developerské projekty s bonitní klientelou. Vytváříme prostředí pro efektivní zhodnocení kapitálu prostřednictvím moderní architektury.",
    icon: PlusCircle,
  },
  {
    title: "Komerční výstavba",
    description: "Podporujeme projekty s jasnou vizí budoucnosti. Od moderních kancelářských komplexů až po udržitelné projekty s vysokou přidanou hodnotou pro investory.",
    icon: Clock,
  },
];

export default function Projects() {
  return (
    <section id="projekty" className="py-24 bg-beige/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Projekty</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Na jaké projekty se zaměřujeme</h2>
          <p className="text-xl text-gray-600">
            Spolupracujeme na prémiových developerských projektech, kde rozhoduje kvalita, důvěra a dlouhodobý přístup ke klientům.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 shadow-sm border border-beige/50 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-primary flex items-center justify-center mb-8">
                <type.icon className="text-gold w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{type.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary text-white text-center">
          <p className="text-lg font-medium">
            Zaměřujeme se na projekty s reálnou hodnotou, silným zázemím a jasným obchodním potenciálem.
          </p>
        </div>
      </div>
    </section>
  );
}
