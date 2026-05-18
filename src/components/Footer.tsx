import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { legalContent } from "@/data/legal";

interface FooterProps {
  setView: (view: "home" | "blog" | "post") => void;
}

export default function Footer({ setView }: FooterProps) {
  const [activeLegalKey, setActiveLegalKey] = useState<keyof typeof legalContent | null>(null);

  return (
    <footer className="bg-primary py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <button 
            onClick={() => setView("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img 
              src="/logos/gold.png" 
              alt="Cornerstone Marketing Logo" 
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="flex gap-8 text-white/50 text-sm font-medium uppercase tracking-widest">
            <a href="#o-nas" onClick={() => setView("home")} className="hover:text-gold transition-colors">O nás</a>
            <a href="#sluzby" onClick={() => setView("home")} className="hover:text-gold transition-colors">Služby</a>
            <a href="#projekty" onClick={() => setView("home")} className="hover:text-gold transition-colors">Projekty</a>
            <a href="#kariera" onClick={() => setView("home")} className="hover:text-gold transition-colors">Kariéra</a>
            <button onClick={() => setView("blog")} className="hover:text-gold transition-colors uppercase cursor-pointer">Blog</button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-white/30 text-xs text-center md:text-right">
              © {new Date().getFullYear()} Cornerstone Marketing. Všechna práva vyhrazena.
            </div>
            <div className="flex gap-4 text-white/20 text-[10px] uppercase tracking-wider">
              <button 
                onClick={() => setActiveLegalKey("gdpr")} 
                className="hover:text-gold transition-colors cursor-pointer"
              >
                GDPR
              </button>
              <button 
                onClick={() => setActiveLegalKey("vop")} 
                className="hover:text-gold transition-colors cursor-pointer"
              >
                VOP
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-[10px] text-white/20 leading-relaxed max-w-4xl mx-auto text-center">
          <p className="font-semibold text-white/30 mb-2 uppercase tracking-widest">{legalContent.disclaimer.title}</p>
          <p className="mb-6">{legalContent.disclaimer.content}</p>
          
          <div className="border-t border-white/5 pt-6 text-[10px] text-white/30 max-w-3xl mx-auto">
            <p className="font-semibold text-gold mb-2 uppercase tracking-widest">Cornerstone Marketing s.r.o.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-1.5 gap-x-6 text-white/25">
              <span><strong>IČO:</strong> 24975583</span>
              <span className="hidden md:inline text-white/10">•</span>
              <span><strong>ADRESA:</strong> Příčná 1892/4, Nové Město (Praha 1), 110 00 Praha</span>
              <span className="hidden md:inline text-white/10">•</span>
              <span><strong>Spisová značka:</strong> C 445859/MSPH Městský soud v Praze</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeLegalKey && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLegalKey(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-primary border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-primary/50 backdrop-blur-md">
                <h3 className="text-xl font-serif text-gold">
                  {legalContent[activeLegalKey].title}
                </h3>
                <button 
                  onClick={() => setActiveLegalKey(null)}
                  className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {legalContent[activeLegalKey].content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
