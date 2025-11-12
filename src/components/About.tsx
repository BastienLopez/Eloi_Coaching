import eloiPortrait from "@/assets/eloi-portrait.jpg";
import { Award, Heart, Target, User } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Spécialiste Hyrox",
      description: "Préparation Hyrox et renforcement fonctionnel"
    },
    {
      icon: User,
      title: "Coaching individuel",
      description: "Accompagnement 100% personnalisé et sur-mesure"
    },
    {
      icon: Award,
      title: "Formation en cours",
      description: "Diplôme d'ostéopathie et certification coaching sportif"
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
                loading="lazy"
                width="600"
                height="600"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-energy rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-accent">Eloi - Coach Sportif & Ostéo</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Futur ostéopathe D.O et coach sportif certifié, je combine deux expertises complémentaires 
              pour offrir un accompagnement complet et unique. Passionné par le sport et la santé, 
              j'accompagne chaque personne vers ses objectifs tout en préservant son corps des blessures.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Que tu souhaites te remettre en forme, préparer une compétition Hyrox, soulager des douleurs 
              chroniques ou simplement optimiser tes performances, j'adapte chaque séance à ton niveau, 
              tes besoins et tes ambitions. Mon approche holistique garantit des résultats durables en harmonie 
              avec ton corps.
            </p>

            {/* Highlights - Grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-3 items-start p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-glow hover:border-accent/50 transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    <item.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base mb-1 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
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
