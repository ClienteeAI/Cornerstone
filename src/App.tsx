import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Earnings from "@/components/Earnings";
import HowItWorks from "@/components/HowItWorks";
import ClientWork from "@/components/ClientWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlogArchive from "@/components/BlogArchive";
import BlogPostView from "@/components/BlogPostView";
import { blogPosts } from "@/data/blogPosts";

type View = "home" | "blog" | "post";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, currentPostId]);

  const currentPost = blogPosts.find(p => p.id === currentPostId);

  return (
    <div className="min-h-screen bg-white selection:bg-gold selection:text-primary">
      <Navbar 
        setView={(v) => { setView(v); setCurrentPostId(null); }} 
        forceSolid={view !== "home"}
      />
      
      <main>
        {view === "home" && (
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Career />
            <Earnings />
            <HowItWorks />
            <ClientWork />
            <Contact />
          </>
        )}

        {view === "blog" && (
          <BlogArchive onPostClick={(id) => {
            setCurrentPostId(id);
            setView("post");
          }} />
        )}

        {view === "post" && currentPost && (
          <BlogPostView 
            post={currentPost} 
            onBack={() => setView("blog")} 
          />
        )}
      </main>

      <Footer setView={(v) => { setView(v); setCurrentPostId(null); }} />
    </div>
  );
}
