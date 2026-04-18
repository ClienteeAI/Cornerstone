export default function Footer() {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="/logos/gold.png" 
              alt="Cornerstone Marketing Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="flex gap-8 text-white/50 text-sm font-medium uppercase tracking-widest">
            <a href="#o-nas" className="hover:text-gold transition-colors">O nás</a>
            <a href="#sluzby" className="hover:text-gold transition-colors">Služby</a>
            <a href="#projekty" className="hover:text-gold transition-colors">Projekty</a>
            <a href="#kariera" className="hover:text-gold transition-colors">Kariéra</a>
          </div>

          <div className="text-white/30 text-xs">
            © {new Date().getFullYear()} Cornerstone Marketing. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}
