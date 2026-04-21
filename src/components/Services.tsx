import { motion } from "motion/react";
import { Target, Megaphone, Briefcase, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Generování poptávky",
    description: "Vytváříme systém, který dlouhodobě přivádí nové klienty a zájemce o realitní projekty.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop", // Bright professional office/handshake
  },
  {
    title: "Marketing projektů",
    description: "Zajišťujeme marketingovou podporu developerských projektů od prvního kontaktu až po obchodní fázi.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Modern bright architecture
  },
  {
    title: "Podpora obchodního týmu",
    description: "Dodáváme kontakty, strukturu a prostředí, ve kterém se obchodní tým může soustředit na výkon.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // Bright professional team collaborating
  },
  {
    title: "Výkonnostní přístup",
    description: "Každý krok je nastavený s cílem dosahovat reálných výsledků, ne jen generovat aktivitu.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // High-end data/marketing focus
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-24 bg-[#FAF9F6] text-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-md mb-20 lg:mb-32">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Co děláme</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#163E32]">Služby</h2>
          <p className="text-xl text-[#163E32]/70 leading-relaxed">
            Zaměřujeme se na marketing, který má jasný cíl — přivádět klienty a podporovat obchodní výsledky.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-end relative min-h-[500px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -50, -100, -150][index]
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative overflow-hidden bg-white border border-black/5 aspect-[4/5] shadow-2xl"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163E32] via-[#163E32]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="w-12 h-1 bg-gold mb-6 group-hover:w-20 transition-all duration-500 shadow-glow"></div>
                <div className="min-h-[4rem] flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-gold transition-colors">{service.title}</h3>
                </div>
                <div className="h-0 group-hover:h-24 transition-all duration-500 overflow-hidden">
                  <p className="text-white/80 leading-relaxed text-sm pt-2 font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
