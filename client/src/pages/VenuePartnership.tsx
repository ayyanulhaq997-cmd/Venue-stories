import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function VenuePartnership() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold mb-6 italic">For Venue Owners</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight">PARTNERSHIP</h1>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
            <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
              "We don't just list venues; we curate the extraordinary."
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video gold-border overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
              alt="Venue Partnership" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Elevate your venue's <span className="italic text-primary">prestige and visibility.</span></h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-loose tracking-wide">
              <p>
                Private Dining London represents a curated portfolio of the city's most exceptional spaces. We partner with owners who share our commitment to architectural beauty and service excellence.
              </p>
              <ul className="space-y-4 text-sm uppercase tracking-widest text-primary/80">
                <li className="flex items-center"><span className="w-8 h-[1px] bg-primary/30 mr-4" /> Exclusive Client Access</li>
                <li className="flex items-center"><span className="w-8 h-[1px] bg-primary/30 mr-4" /> Global Marketing Exposure</li>
                <li className="flex items-center"><span className="w-8 h-[1px] bg-primary/30 mr-4" /> Bespoke Representation</li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/enquire">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700">
                  Apply for Partnership
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
