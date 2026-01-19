import { motion } from "framer-motion";

export default function Cookies() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl mb-16 tracking-tight uppercase">COOKIES</h1>
          <div className="prose prose-invert max-w-none font-light text-muted-foreground leading-relaxed tracking-wide italic">
            <p className="mb-12">Last updated: January 2026</p>
            
            <div className="space-y-12">
              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">Digital Refinement</h3>
                <p>We use essential cookies to orchestrate your experience on our platform, remembering your preferences and refining our concierge services.</p>
              </section>

              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">Analytics</h3>
                <p>Subtle analytics help us understand how discerning clients interact with our collection, allowing us to continuously elevate our digital presence.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
