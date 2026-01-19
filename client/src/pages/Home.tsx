import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
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
        <div className="absolute inset-0 z-0 scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Dining"
            className="w-full h-full object-cover animate-in fade-in zoom-in duration-[3000ms]"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="uppercase tracking-[0.6em] text-[10px] md:text-xs text-primary font-medium">
              Elegance Reimagined
            </p>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl mb-12 leading-[0.9] tracking-tight">
              PRIVATE DINING<br/>
              <span className="text-primary/90 italic">LONDON</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/spaces">
                <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 min-w-[220px]">
                  View Collection
                </Button>
              </Link>
              <Link href="/enquire">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-black rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 min-w-[220px]">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 opacity-40" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Star className="w-8 h-8 text-primary/40 mx-auto mb-12" />
          <h2 className="font-serif text-4xl md:text-6xl mb-12 leading-tight tracking-tight">
            Curating moments of <span className="italic text-primary">absolute refinement</span> in London's most secret corners.
          </h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
          <p className="text-muted-foreground font-light leading-loose text-xl max-w-2xl mx-auto italic">
            "Beyond the plate, we orchestrate the atmosphere. From the first pour to the final farewell, your vision is refined through our lens of exceptional hospitality."
          </p>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-32 bg-[#0c0e12] border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 space-y-8 md:space-y-0 text-center md:text-left">
            <div>
              <p className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4">The Private Collection</p>
              <h2 className="font-serif text-4xl md:text-6xl">Iconic Venues</h2>
            </div>
            <Link href="/spaces" className="group flex items-center text-[11px] font-bold uppercase tracking-[0.3em] text-primary hover:text-white transition-all duration-500">
              Explore All <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {spaces?.slice(0, 3).map((space, i) => (
              <SpaceCard key={space.id} space={space} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Journal / Stories */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4">The Journal</p>
            <h2 className="font-serif text-4xl md:text-6xl">Event Inspiration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {stories?.slice(0, 3).map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Hire Preview */}
      <section className="h-[70vh] relative flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Bespoke Events"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <div className="glass-card max-w-3xl mx-auto p-12 md:p-20 border-primary/20">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Tailored to your <span className="italic text-primary">exact specifications</span></h2>
            <p className="text-white/70 font-light text-lg mb-10 tracking-wide">
              Whether a corporate gala or a private milestone, our planners bring surgical precision to every detail.
            </p>
            <Link href="/bespoke-hire">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700">
                Bespoke Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
