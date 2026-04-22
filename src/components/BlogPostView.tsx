import { motion } from "motion/react";
import { BlogPost } from "@/data/blogPosts";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPostView({ post, onBack }: BlogPostViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen pb-24"
    >
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gold text-primary px-6 py-2 text-xs font-bold uppercase tracking-widest mb-8 inline-block shadow-2xl"
            >
              {post.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight"
            >
              {post.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between pb-12 mb-12 border-b border-beige gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <User size={18} className="text-gold" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">{post.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gold" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">{post.date}</span>
              </div>
            </div>
            
            <button 
              onClick={onBack}
              className="flex items-center gap-3 text-gold font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} /> Zpět na články
            </button>
          </div>

          <div 
            className="prose prose-xl max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-primary/70 prose-p:leading-relaxed prose-strong:text-primary prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-20 pt-10 border-t border-beige flex justify-between items-center">
            <button 
              onClick={onBack}
              className="group flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm"
            >
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold transition-all">
                <ArrowLeft size={20} className="group-hover:text-white transition-colors" />
              </div>
              Zpět na přehled
            </button>
            <div className="hidden sm:block text-primary/30 font-bold uppercase tracking-[0.3em] text-xs">
              Cornerstone Knowledge Hub
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
