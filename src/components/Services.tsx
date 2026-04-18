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
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Co děláme</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Služby</h2>
          <p className="text-xl text-white/70">
            Zaměřujeme se na marketing, který má jasný cíl — přivádět klienty a podporovat obchodní výsledky u developerských a realitních projektů.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 aspect-[4/5]"
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
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
