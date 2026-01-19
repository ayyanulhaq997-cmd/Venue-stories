import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl mb-16 tracking-tight uppercase">PRIVACY</h1>
          <div className="prose prose-invert max-w-none font-light text-muted-foreground leading-relaxed tracking-wide italic">
            <p className="mb-12">Last updated: January 2026</p>
            
            <div className="space-y-12">
              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">Information Discretion</h3>
                <p>Private Dining London operates with absolute discretion. We collect only the data necessary to refine your event experience and secure venue partnerships.</p>
              </section>

              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">Data Protection</h3>
                <p>Your personal information is encrypted and never shared with third parties outside of our verified venue partners.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
