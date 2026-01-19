import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Space } from "@shared/schema";
import { ArrowRight, MapPin, Users } from "lucide-react";

export function SpaceCard({ space, index = 0 }: { space: Space; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full bg-[#121418] border border-primary/5 hover:border-primary/20 transition-all duration-700 relative overflow-hidden"
    >
      {/* Hover Image Zoom */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={space.imageUrl} 
          alt={space.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Capacity/Location Badges */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/90">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-2 text-primary" />
            {space.location}
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-2 text-primary" />
            {space.capacity}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-8">
        <h3 className="font-serif text-3xl font-light mb-4 group-hover:text-primary transition-colors duration-500">
          {space.name}
        </h3>
        
        <p className="text-muted-foreground/80 line-clamp-3 mb-8 text-sm leading-relaxed font-light tracking-wide flex-grow">
          {space.description}
        </p>

        <Link href={`/spaces/${space.slug}`} className="group/link flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 hover:text-white transition-all duration-500">
          View Space <ArrowRight className="ml-3 w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-500" />
        </Link>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
    </motion.div>
  );
}
