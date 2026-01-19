import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function BespokeHire() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-xs text-primary font-bold mb-4">Tailored Services</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-8 text-foreground">Bespoke Hire</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="prose prose-lg font-light text-muted-foreground leading-loose">
            <p>
              Our Bespoke Hire service is designed for clients who require more than just a venue. 
              We offer end-to-end event planning and production, ensuring that every element of your occasion is executed flawlessly.
            </p>
            <p>
              From custom menu curation with Michelin-starred chefs to floral design, entertainment, and logistics, our team acts as your personal event concierge.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden">
             {/* Unsplash: Chef plating food */}
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
              alt="Fine Dining" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center bg-secondary/30 p-12">
          <h3 className="font-serif text-3xl mb-6">Start Planning Your Custom Event</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our dedicated bespoke team to discuss your specific requirements.
          </p>
          <Link href="/enquire">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 uppercase tracking-widest text-sm font-bold">
              Contact Bespoke Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
