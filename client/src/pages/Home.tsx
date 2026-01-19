import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import { useSpaces, useStories } from "@/hooks/use-content";
import { SpaceCard } from "@/components/SpaceCard";
import { StoryCard } from "@/components/StoryCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: spaces } = useSpaces();
  const { data: stories } = useStories();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Decorative background image from Unsplash */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Unsplash: Luxury dining table setting */}
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Dining Experience"
            className="w-full h-full object-cover animate-in fade-in zoom-in duration-[2000ms]"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-light"
          >
            Luxury Event Venues
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          >
            Private Dining<br/>London
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/spaces">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-sm font-bold uppercase tracking-widest">
                Explore Venues
              </Button>
            </Link>
            <Link href="/enquire">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white rounded-none px-8 py-6 text-sm font-bold uppercase tracking-widest">
                Enquire Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Star className="w-6 h-6 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-relaxed text-foreground">
            "Curating exceptional spaces for unforgettable moments. We define the art of gathering."
          </h2>
          <p className="text-muted-foreground font-light leading-loose text-lg">
            From intimate dinners in hidden wine cellars to grand receptions in historic ballrooms, 
            Private Dining London connects you with the city's most exclusive venues. 
            Experience hospitality reimagined.
          </p>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="uppercase tracking-widest text-xs text-primary font-bold mb-2">The Collection</p>
              <h2 className="font-serif text-4xl text-foreground">Featured Spaces</h2>
            </div>
            <Link href="/spaces" className="hidden sm:flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces?.slice(0, 3).map((space, i) => (
              <SpaceCard key={space.id} space={space} index={i} />
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link href="/spaces" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journal / Stories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="uppercase tracking-widest text-xs text-primary font-bold mb-2">The Journal</p>
              <h2 className="font-serif text-4xl text-foreground">Stories</h2>
            </div>
            <Link href="/stories" className="hidden sm:flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories?.slice(0, 3).map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             {/* Unsplash: Abstract texture */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
              alt="Texture" 
              className="w-full h-full object-cover" 
            />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to create something extraordinary?</h2>
          <p className="text-muted text-lg mb-10 font-light opacity-80 max-w-2xl mx-auto">
            Our team of event specialists is ready to help you find the perfect setting for your next occasion.
          </p>
          <Link href="/enquire">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-sm font-bold uppercase tracking-widest">
              Start Your Inquiry
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
