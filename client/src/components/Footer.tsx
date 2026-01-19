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
    <footer className="bg-primary/5 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground text-sm font-light leading-relaxed">
              <p>30 Water Street,</p>
              <p>London E14 5GX</p>
              <p className="pt-2">+44 (0)203-319-9332</p>
              <p>hello@spacesstories.com</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Explore</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/spaces" className="hover:text-primary transition-colors">Spaces</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Stories</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/venue-partnership" className="hover:text-primary transition-colors">Venue Partnership</Link></li>
              <li><Link href="/bespoke-hire" className="hover:text-primary transition-colors">Bespoke Hire</Link></li>
              <li><Link href="/enquire" className="hover:text-primary transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Subscribe to receive the latest news and exclusive offers.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email Address" {...field} className="bg-background border-primary/20 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs font-bold py-6"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Private Dining London. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/policies" className="hover:text-primary">Policies</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
