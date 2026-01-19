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

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/95 backdrop-blur-md border-border/40 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-widest uppercase hover:opacity-80 transition-opacity">
          Private Dining
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary",
                location === link.href ? "text-primary border-b border-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                  "text-lg font-serif tracking-wide hover:text-primary",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
