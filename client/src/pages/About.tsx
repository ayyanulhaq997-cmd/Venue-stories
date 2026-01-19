export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-xs text-primary font-bold mb-4">Who We Are</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-8 text-foreground">Curators of Exceptional Experiences</h1>
        </div>

        <div className="prose prose-lg max-w-none font-light text-muted-foreground leading-loose">
          <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-2 first-letter:float-left">
            Private Dining London was founded with a singular vision: to connect discerning clients with the city's most exquisite and hidden venues. 
            We believe that the setting of an event is not just a backdrop, but a central character in the story of the evening.
          </p>
          <p className="mb-6">
            Our team of dedicated event specialists has scoured the capital to build a portfolio of spaces that range from the historically significant to the cutting-edge contemporary. 
            Whether it's a centuries-old wine cellar in the City or a glass-walled penthouse in Canary Wharf, each venue in our collection has been chosen for its unique character and commitment to service excellence.
          </p>
          
          <div className="my-12 relative aspect-[21/9] w-full overflow-hidden">
             {/* Unsplash: Elegant architectural detail */}
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
              alt="Architecture" 
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-serif text-3xl text-foreground mt-12 mb-6">Our Mission</h3>
          <p className="mb-6">
            We strive to make the process of finding and booking the perfect venue effortless. 
            We understand that our clients demand perfection, and we deliver it through our bespoke consultation service, ensuring that every detail aligns with your vision.
          </p>
        </div>
      </div>
    </div>
  );
}
