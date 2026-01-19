import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InquiryInput } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Enquire() {
  const { toast } = useToast();
  const mutation = useCreateInquiry();
  const form = useForm<InquiryInput>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Inquiry Sent",
          description: "Our concierge team will review your request and contact you shortly.",
        });
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <header className="space-y-6">
              <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold italic">Private Concierge</p>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight">ENQUIRE</h1>
              <div className="w-24 h-[1px] bg-primary/30 mb-8" />
              <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
                Begin your journey toward an exceptional event. Our curators will respond within 24 hours.
              </p>
            </header>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="border border-primary/20 p-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 uppercase tracking-widest">Atelier</h3>
                  <p className="text-muted-foreground font-light text-sm tracking-widest leading-relaxed">
                    30 Water Street,<br/>London E14 5GX
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="border border-primary/20 p-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 uppercase tracking-widest">Direct</h3>
                  <p className="text-muted-foreground font-light text-sm tracking-widest">
                    +44 (0)203-319-9332
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="border border-primary/20 p-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 uppercase tracking-widest">Digital</h3>
                  <p className="text-muted-foreground font-light text-sm tracking-widest">
                    hello@spacesstories.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-primary opacity-40" />
                ))}
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  Rated Exceptional by our Clients
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card p-12 lg:p-16 border-primary/10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. Alexander Sterling" {...field} className="bg-transparent border-white/10 focus:border-primary rounded-none h-12 text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="alex@sterling.com" {...field} className="bg-transparent border-white/10 focus:border-primary rounded-none h-12 text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+44 7..." {...field} className="bg-transparent border-white/10 focus:border-primary rounded-none h-12 text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Event Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Corporate / Private" {...field} className="bg-transparent border-white/10 focus:border-primary rounded-none h-12 text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Desired Date</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="MM / DD / YYYY" {...field} className="bg-transparent border-white/10 focus:border-primary rounded-none h-12 text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Guest Count</FormLabel>
                        <FormControl>
                          <Input placeholder="Approximate number" {...field} className="bg-transparent border-white/10 focus:border-primary rounded-none h-12 text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Your Vision</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about the atmosphere you wish to create..." 
                          {...field} 
                          className="bg-transparent border-white/10 focus:border-primary rounded-none min-h-[150px] text-sm tracking-wide leading-relaxed" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white hover:bg-white hover:text-black rounded-none h-16 uppercase tracking-[0.4em] text-[11px] font-bold transition-all duration-700"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting Inquiry..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
