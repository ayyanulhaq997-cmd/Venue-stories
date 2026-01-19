import { motion } from "framer-motion";

export default function Careers() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold mb-6 italic">Join the Collective</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight">CAREERS</h1>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
          </motion.div>
        </header>
        
        <div className="space-y-12 max-w-2xl mx-auto">
          <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
            "We seek individuals who understand that true luxury lives in the smallest details."
          </p>
          <div className="space-y-8 text-muted-foreground font-light text-lg leading-loose tracking-wide">
            <p>
              Are you passionate about the intersection of architectural beauty and exceptional hospitality? Private Dining London is always looking for visionaries to join our event concierge team.
            </p>
            <div className="glass-card p-12 border-primary/10 inline-block w-full">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">Direct Inquiry</p>
              <p className="text-white text-2xl font-serif">careers@spacesstories.com</p>
              <p className="text-xs text-muted-foreground mt-4 italic">Please attach your portfolio and vision statement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
