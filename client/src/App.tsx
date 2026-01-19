import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Components
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Spaces from "@/pages/Spaces";
import Stories from "@/pages/Stories";
import VenuePartnership from "@/pages/VenuePartnership";
import BespokeHire from "@/pages/BespokeHire";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Enquire from "@/pages/Enquire";
import Careers from "@/pages/Careers";
import Policies from "@/pages/Policies";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/not-found";

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/spaces" component={Spaces} />
      <Route path="/stories" component={Stories} />
      <Route path="/venue-partnership" component={VenuePartnership} />
      <Route path="/bespoke-hire" component={BespokeHire} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/enquire" component={Enquire} />
      <Route path="/careers" component={Careers} />
      <Route path="/policies" component={Policies} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/cookies" component={Cookies} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">
          <ScrollToTop />
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
