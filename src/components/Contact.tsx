import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-beige/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Section 9: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Výzva</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-10 leading-tight">
              Vyber si směr
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-shiny text-white font-bold rounded-none px-10 py-8 text-xl h-auto btn-border-beam">
                Navázat spolupráci
              </Button>
              <Button className="btn-shiny-gold text-primary font-bold rounded-none px-10 py-8 text-xl h-auto btn-border-beam">
                Přidat se do týmu
              </Button>
            </div>
          </motion.div>

          {/* Section 10: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-16 shadow-xl border border-beige"
          >
            <h3 className="text-3xl font-bold text-primary mb-8">Kontaktujte nás</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-bold uppercase text-xs tracking-widest">Jméno</Label>
                <Input id="name" placeholder="Vaše jméno" className="rounded-none border-beige focus:border-gold h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary font-bold uppercase text-xs tracking-widest">Telefon</Label>
                <Input id="phone" placeholder="+420 000 000 000" className="rounded-none border-beige focus:border-gold h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-bold uppercase text-xs tracking-widest">Email</Label>
                <Input id="email" type="email" placeholder="vas@email.cz" className="rounded-none border-beige focus:border-gold h-12" />
              </div>

              <Button className="w-full btn-shiny text-white font-bold rounded-none py-6 text-lg btn-border-beam">
                Odeslat poptávku
              </Button>

              <p className="text-center text-gray-500 text-sm mt-6">
                Ozveme se do 24 hodin.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
