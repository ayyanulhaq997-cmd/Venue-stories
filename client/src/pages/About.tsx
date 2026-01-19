import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold mb-6 italic">Who We Are</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight">CURIOSITY</h1>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
            <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
              "We don't just find venues; we discover the character of your occasion."
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Founded on a vision of <span className="italic text-primary">absolute exclusivity.</span></h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-loose tracking-wide">
              <p>
                Private Dining London was established to bridge the gap between London's most discerning hosts and the city's best-kept architectural secrets. 
              </p>
              <p>
                Our team of dedicated event specialists has scoured the capital to build a portfolio of spaces that range from the historically significant to the cutting-edge contemporary. 
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
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
              alt="Architecture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            />
          </motion.div>
        </div>

        <div className="mt-48 text-center max-w-3xl mx-auto space-y-12">
          <div className="w-[1px] h-32 bg-primary/20 mx-auto" />
          <h3 className="font-serif text-4xl italic text-primary tracking-tight">"Our mission is to make the effortless appear extraordinary."</h3>
          <p className="text-muted-foreground font-light text-lg tracking-wide leading-relaxed">
            We understand that our clients demand perfection, and we deliver it through our bespoke consultation service, ensuring that every detail aligns with your vision.
          </p>
        </div>
      </div>
    </div>
  );
}
