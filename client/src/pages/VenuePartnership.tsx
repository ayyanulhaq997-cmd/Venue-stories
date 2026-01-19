import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function VenuePartnership() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-xs text-primary font-bold mb-4">For Venue Owners</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-8 text-foreground">Partner With Us</h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden mb-12">
            {/* Unsplash: High-end bar interior */}
           <img 
             src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
             alt="Venue Partnership" 
             className="w-full h-full object-cover"
           />
        </div>

        <div className="prose prose-lg max-w-none font-light text-muted-foreground leading-loose">
          <p>
            Private Dining London represents a curated portfolio of the city's most exceptional spaces. 
            We partner with venue owners who share our commitment to quality, service, and design.
          </p>
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-4">Why Partner With Us?</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li>Access to a network of high-net-worth individuals and corporate clients.</li>
            <li>Marketing exposure through our digital channels and newsletters.</li>
            <li>Professional representation and booking management.</li>
            <li>Consultation on venue optimization and pricing strategies.</li>
          </ul>
          
          <div className="mt-12 text-center">
            <Link href="/enquire">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 uppercase tracking-widest text-sm font-bold">
                Apply for Partnership
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
