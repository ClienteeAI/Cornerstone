import { motion } from "motion/react";
import { CheckCircle2, Calendar, Trophy, Users2, HeartHandshake } from "lucide-react";

const points = [
  "klienta provázíš celým obchodním procesem",
  "pracuješ s jeho rozhodováním a buduješ důvěru",
  "vytváříš dlouhodobé vztahy, ne jednorázový kontakt",
  "účastníš se společenských a networkingových akcí",
  "pracuješ s klientelou, která má reálný zájem o realitní projekty",
];

const events = [
  { 
    name: "Golfové turnaje", 
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    name: "Dostihy", 
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop" 
  },
  { 
    name: "Sportovní utkání", 
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop" 
  },
  { 
    name: "Networkingové akce", 
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" 
  },
];

export default function ClientWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Vztahy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Jak vypadá práce s klientem
            </h2>
            <div className="space-y-6 text-lg text-gray-600 mb-10">
              <p>
                Obchodník u nás pracuje s klientem od prvního kontaktu až po finální rozhodnutí.
                Nejde jen o jednorázový prodej, ale o budování dlouhodobého vztahu založeného na důvěře a kvalitní komunikaci.
              </p>
              <p>
                Klienta provázíš celým procesem — od prvního oslovení, přes představení projektu a práci s jeho rozhodováním, až po finální uzavření spolupráce.
              </p>
              <p>
                Tím to ale nekončí. S klienty dlouhodobě pracujeme, udržujeme vztahy a zveme je na společenské a networkingové akce.
              </p>
            </div>

            <div className="grid gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-primary font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary p-10 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8 text-gold">Společenské akce</h3>
            <p className="text-white/70 mb-10 text-lg">
              S klienty se pravidelně potkáváme i mimo samotný obchod na námi pořádaných akcích.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {events.map((event, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden border border-white/10">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="font-bold text-xs uppercase tracking-[0.2em] text-center">{event.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="text-gold italic font-serif text-lg">
                "Součástí jsou i setkání s lidmi stojícími za projekty."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
