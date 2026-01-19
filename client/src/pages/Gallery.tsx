import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1466978913421-dad938661248?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold mb-6 italic">Visual Memoirs</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight">GALLERY</h1>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
            <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
              A glimpse into the extraordinary atmospheres we've orchestrated.
            </p>
          </motion.div>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden border border-white/5 gold-border"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
