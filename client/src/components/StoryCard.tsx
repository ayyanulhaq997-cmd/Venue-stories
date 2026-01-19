import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Story } from "@shared/schema";
import { ArrowUpRight } from "lucide-react";

export function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link href={`/stories/${story.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden mb-6">
          <img 
            src={story.imageUrl} 
            alt={story.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-widest text-primary/80 font-semibold">
            Journal
          </div>
          <h3 className="font-serif text-2xl font-medium leading-tight group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {story.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
