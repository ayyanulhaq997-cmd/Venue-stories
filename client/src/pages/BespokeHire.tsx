import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function BespokeHire() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold mb-6 italic">Tailored Excellence</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight">BESPOKE</h1>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
            <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
              "Every detail is a signature. Every moment is a masterpiece."
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Your event, <span className="italic text-primary">orchestrated to perfection.</span></h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-loose tracking-wide">
              <p>
                Our Bespoke Hire service is designed for those who require more than just a room. We act as your private concierge, managing everything from Michelin-starred menus to immersive production design.
              </p>
              <p>
                We believe in the power of surgical precision. No request is too complex, no detail too small for our attention.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square gold-border overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
              alt="Bespoke Events" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            />
          </motion.div>
        </div>

        <div className="glass-card p-16 md:p-24 text-center border-primary/10 max-w-4xl mx-auto">
          <h3 className="font-serif text-4xl mb-8">Ready to define your vision?</h3>
          <p className="text-muted-foreground font-light text-lg mb-12 max-w-2xl mx-auto tracking-wide">
            Consult with our specialists to begin the process of creating your most memorable occasion yet.
          </p>
          <Link href="/enquire">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700">
              Start Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
