import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "O nás", href: "#o-nas" },
  { name: "Služby", href: "#sluzby" },
  { name: "Projekty", href: "#projekty" },
  { name: "Kariéra", href: "#kariera" },
  { name: "Kontakt", href: "#kontakt" },
];

interface NavbarProps {
  setView: (view: "home" | "blog" | "post") => void;
  forceSolid?: boolean;
}

export default function Navbar({ setView, forceSolid }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = scrolled || forceSolid;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-[#163E32]/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView("home")} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <img 
            src="/logos/gold.png" 
            alt="Cornerstone Marketing Logo" 
            className="h-12 w-auto object-contain"
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setView("home")}
              className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] hover:text-gold transition-colors text-sm font-bold uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setView("blog")}
            className="text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-primary transition-all text-sm font-bold uppercase tracking-wider bg-primary/20 backdrop-blur-sm shadow-xl"
          >
            Blog
          </button>
          <Button className="btn-shiny-gold text-primary font-bold rounded-none px-6 btn-border-beam">
            Spolupracovat
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-gold transition-colors text-lg font-medium"
                  onClick={() => {
                    setView("home");
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setView("blog");
                  setIsOpen(false);
                }}
                className="text-gold text-lg font-medium text-left hover:text-white transition-colors"
              >
                Blog
              </button>
              <Button className="bg-gold hover:bg-gold/90 text-primary font-bold rounded-none w-full mt-4">
                Spolupracovat
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
