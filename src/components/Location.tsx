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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12845.68256550015!2d2.5379438771554206!3d48.82782196740195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60e6baca80c41%3A0x6ca1b4aa51e251bc!2s94350%20Villiers-sur-Marne!5e1!3m2!1sfr!2sfr!4v1762476256514!5m2!1sfr!2sfr"
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
