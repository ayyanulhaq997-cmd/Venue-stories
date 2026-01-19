import { motion } from "framer-motion";

export default function Policies() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl mb-16 tracking-tight uppercase">POLICIES</h1>
          <div className="prose prose-invert max-w-none font-light text-muted-foreground leading-relaxed tracking-wide italic">
            <p className="mb-12">Last updated: January 2026</p>
            
            <div className="space-y-12">
              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">1. Booking Integrity</h3>
                <p>All bookings are curated and subject to direct confirmation from the venue partner. A concierge fee and venue deposit are required to initiate the orchestration process.</p>
              </section>

              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">2. Refinement Period</h3>
                <p>Cancellations or significant adjustments must be submitted no later than 30 days prior to the event date to maintain deposit integrity.</p>
              </section>

              <section>
                <h3 className="font-serif text-2xl text-primary uppercase tracking-widest mb-4">3. Code of Conduct</h3>
                <p>We expect all guests to respect the historical and architectural integrity of our partner venues.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
