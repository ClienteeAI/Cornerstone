interface FooterProps {
  setView: (view: "home" | "blog" | "post") => void;
}

export default function Footer({ setView }: FooterProps) {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
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
            <button onClick={() => setView("blog")} className="hover:text-gold transition-colors uppercase">Blog</button>
          </div>

          <div className="text-white/30 text-xs">
            © {new Date().getFullYear()} Cornerstone Marketing. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}
