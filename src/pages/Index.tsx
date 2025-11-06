import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Benefits />
      <Programs />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
