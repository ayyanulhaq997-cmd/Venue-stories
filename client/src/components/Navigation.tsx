import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/spaces", label: "Spaces" },
  { href: "/stories", label: "Stories" },
  { href: "/venue-partnership", label: "Partnership" },
  { href: "/bespoke-hire", label: "Bespoke Hire" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/enquire", label: "Enquire" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 py-4 shadow-2xl" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="group flex flex-col items-center">
          <span className="font-serif text-2xl tracking-[0.3em] uppercase group-hover:text-primary transition-colors duration-500">
            Private Dining
          </span>
          <span className="text-[10px] tracking-[0.5em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-500">
            London
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary relative group",
                location === link.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full",
                location === link.href && "w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-primary hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-background/98 backdrop-blur-2xl transition-all duration-500 ease-in-out z-[60]",
        isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
          <button 
            className="absolute top-8 right-8 p-2 text-primary"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          {links.map((link, i) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-2xl font-serif tracking-[0.2em] uppercase hover:text-primary transition-all duration-300",
                location === link.href ? "text-primary scale-110" : "text-foreground"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
