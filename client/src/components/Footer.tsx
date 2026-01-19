import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const mutation = useCreateSubscriber();
  const form = useForm({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: { email: string }) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <footer className="bg-[#0a0c0f] border-t border-primary/10 relative overflow-hidden">
      {/* Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand & Contact */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.3em] uppercase">Private Dining</span>
              <span className="text-[10px] tracking-[0.5em] uppercase text-primary/60">London</span>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm font-light leading-relaxed tracking-wide">
              <p>30 Water Street,</p>
              <p>London E14 5GX</p>
              <p className="pt-4 text-primary font-medium">+44 (0)203-319-9332</p>
              <p className="hover:text-primary transition-colors cursor-pointer">hello@spacesstories.com</p>
            </div>
            <div className="flex space-x-6 pt-2">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="font-serif text-sm tracking-[0.2em] uppercase text-primary">Discovery</h3>
            <ul className="space-y-4 text-sm text-muted-foreground font-light tracking-wide">
              {['Spaces', 'Stories', 'Gallery', 'About Us', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors block underline-offset-4 hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="font-serif text-sm tracking-[0.2em] uppercase text-primary">Services</h3>
            <ul className="space-y-4 text-sm text-muted-foreground font-light tracking-wide">
              <li><Link href="/venue-partnership" className="hover:text-primary transition-colors">Venue Partnership</Link></li>
              <li><Link href="/bespoke-hire" className="hover:text-primary transition-colors">Bespoke Hire</Link></li>
              <li><Link href="/enquire" className="hover:text-primary transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="font-serif text-sm tracking-[0.2em] uppercase text-primary">Newsletter</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Join our inner circle for exclusive venue releases and event trends.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Email Address" 
                          {...field} 
                          className="bg-transparent border-primary/20 focus:border-primary rounded-none h-12 text-sm tracking-wide" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-primary/40 text-primary hover:bg-primary hover:text-white rounded-none uppercase tracking-[0.3em] text-[10px] font-bold h-12 transition-all duration-500"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Connecting..." : "Join Now"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="border-t border-primary/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase">
          <p>&copy; {new Date().getFullYear()} Private Dining London. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <Link href="/policies" className="hover:text-primary transition-colors">Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
