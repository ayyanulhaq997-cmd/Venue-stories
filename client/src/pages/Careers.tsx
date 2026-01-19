export default function Careers() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-primary font-bold mb-4">Join Our Team</p>
        <h1 className="font-serif text-5xl md:text-6xl mb-8 text-foreground">Careers</h1>
        
        <div className="prose prose-lg max-w-none font-light text-muted-foreground leading-loose mx-auto">
          <p>
            We are always looking for passionate individuals to join our team of event specialists. 
            If you have a keen eye for detail and a love for exceptional hospitality, we would love to hear from you.
          </p>
          <p className="mt-8">
            Please send your CV and cover letter to <span className="text-primary font-medium">careers@spacesstories.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
