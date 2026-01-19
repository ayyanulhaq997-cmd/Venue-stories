import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Story } from "@shared/schema";
import { ArrowUpRight } from "lucide-react";

export function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group flex flex-col h-full"
    >
      <Link href={`/stories/${story.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-white/5 group-hover:border-primary/20 transition-all duration-700">
          <img 
            src={story.imageUrl} 
            alt={story.title}
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="absolute top-6 right-6 border border-white/20 p-3 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="space-y-4 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
            Editorial
          </div>
          <h3 className="font-serif text-3xl font-light leading-tight group-hover:text-primary transition-colors duration-500">
            {story.title}
          </h3>
          <p className="text-muted-foreground/70 text-sm line-clamp-2 leading-relaxed font-light tracking-wide italic">
            {story.excerpt}
          </p>
          <div className="pt-4 flex justify-center">
            <div className="w-8 h-[1px] bg-primary/30 group-hover:w-16 transition-all duration-500" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
