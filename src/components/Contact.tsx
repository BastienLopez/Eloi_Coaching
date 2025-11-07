import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Envie de <span className="text-accent">commencer</span> ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Envoie-moi un message privé sur Instagram, je te réponds au plus vite.
            </p>
          </div>

          <Card className="p-8 text-center">
            <p className="mb-6 text-muted-foreground">
              Clique ci-dessous pour ouvrir une discussion en DM.
            </p>
            <Button asChild size="lg" variant="hero" className="group">
              <a href="https://www.instagram.com/eloi_coachsteo/" target="_blank" rel="noreferrer">
                M’écrire sur Instagram
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

