import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Space } from "@shared/schema";
import { ArrowRight, MapPin, Users } from "lucide-react";

export function SpaceCard({ space, index = 0 }: { space: Space; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-card border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={space.imageUrl} 
          alt={space.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-serif text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
          {space.name}
        </h3>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 font-sans tracking-wide">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-primary/70" />
            {space.location}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1 text-primary/70" />
            {space.capacity}
          </div>
        </div>

        <p className="text-muted-foreground line-clamp-3 mb-6 text-sm leading-relaxed flex-grow">
          {space.description}
        </p>

        <Link href={`/spaces/${space.slug}`} className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors mt-auto">
          View Details <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
