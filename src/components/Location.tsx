import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Location = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Zone <span className="text-accent">d'intervention</span>
            </h2>
          </div>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Reims, Paris et alentours</h3>
                <p className="text-muted-foreground">
                  Séances à domicile, en salle ou en extérieur selon tes préférences
                </p>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.43311831632!2d3.8787558!3d49.258329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e974c20a0484c9%3A0x40c14484fb28b30!2sReims!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de Reims"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
