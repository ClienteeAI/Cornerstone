import { motion } from "motion/react";
import { Target, Megaphone, Briefcase, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Generování poptávky",
    description: "Vytváříme systém, který dlouhodobě přivádí nové klienty a zájemce o realitní projekty.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Marketing projektů",
    description: "Zajišťujeme marketingovou podporu developerských projektů od prvního kontaktu až po obchodní fázi.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Podpora obchodního týmu",
    description: "Dodáváme kontakty, strukturu a prostředí, ve kterém se obchodní tým může soustředit na výkon.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Výkonnostní přístup",
    description: "Každý krok je nastavený s cílem dosahovat reálných výsledků, ne jen generovat aktivitu.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-md mb-20 lg:mb-32">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Co děláme</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Služby</h2>
          <p className="text-xl text-white/70 leading-relaxed">
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
                y: [0, -50, -100, -150][index] // Dramatic stair effect
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3,
                ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a more 'mounting' feel
              }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 aspect-[4/5] shadow-2xl"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-1 bg-gold mb-6 group-hover:w-20 transition-all duration-500"></div>
                <div className="min-h-[4rem] flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{service.title}</h3>
                </div>
                <div className="h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
                  <p className="text-white/60 leading-relaxed text-sm pt-2">
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
