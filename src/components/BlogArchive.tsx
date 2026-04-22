import { motion } from "motion/react";
import { blogPosts } from "@/data/blogPosts";
import { Clock, User, ArrowRight } from "lucide-react";

interface BlogArchiveProps {
  onPostClick: (id: string) => void;
}

export default function BlogArchive({ onPostClick }: BlogArchiveProps) {
  return (
    <div className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Knowledge Hub</span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Pohledy do světa developmentu</h1>
          <p className="text-xl text-primary/70 leading-relaxed">
            Pravidelně sdílíme naše zkušenosti, analýzy trhu a pohledy do zákulisí Cornerstone Marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gold text-primary px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-primary/50 mb-4 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} className="text-gold" />
                  {post.author}
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-gold transition-colors leading-tight">
                {post.title}
              </h2>
              
              <p className="text-lg text-primary/70 mb-8 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                Číst více <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
