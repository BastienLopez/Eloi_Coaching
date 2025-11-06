import eloiPortrait from "@/assets/eloi-portrait.jpg";
import { Award, Heart, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Diplômé et certifié",
      description: "Diplôme en ostéopathie et coaching sportif"
    },
    {
      icon: Target,
      title: "Spécialiste Hyrox",
      description: "Préparation Hyrox et renforcement fonctionnel"
    },
    {
      icon: Heart,
      title: "Approche globale",
      description: "Performance + santé + bien-être"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img 
                src={eloiPortrait} 
                alt="Eloi - Coach sportif et ostéopathe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-energy rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              À propos <span className="text-accent">d'Eloi</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Coach diplômé et ostéopathe D.O., Eloi combine deux expertises complémentaires pour offrir 
              un accompagnement complet et unique. Passionné par le sport et la santé, il aide chaque personne 
              à atteindre ses objectifs tout en préservant son corps des blessures.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Que tu souhaites te remettre en forme, préparer une compétition Hyrox, soulager des douleurs 
              chroniques ou simplement optimiser tes performances, Eloi adapte chaque séance à ton niveau, 
              tes besoins et tes ambitions. Son approche holistique garantit des résultats durables en harmonie 
              avec ton corps.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
