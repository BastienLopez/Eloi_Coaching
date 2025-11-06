import { Bone, Zap, Shield, Heart, Brain, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      icon: Bone,
      title: "Soulagement des douleurs",
      description: "Traitement des douleurs dorsales, articulaires et musculaires chroniques ou aiguës"
    },
    {
      icon: Zap,
      title: "Amélioration de la mobilité",
      description: "Restauration de l'amplitude des mouvements et de la souplesse articulaire"
    },
    {
      icon: Shield,
      title: "Prévention des blessures",
      description: "Identification et correction des déséquilibres posturaux avant qu'ils ne causent des problèmes"
    },
    {
      icon: Heart,
      title: "Optimisation de la récupération",
      description: "Accélération de la guérison après un effort intense ou une blessure sportive"
    },
    {
      icon: Brain,
      title: "Réduction du stress",
      description: "Détente du système nerveux et amélioration de la qualité du sommeil"
    },
    {
      icon: Smile,
      title: "Bien-être global",
      description: "Équilibre du corps dans sa globalité pour une santé optimale et durable"
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Les bienfaits de <span className="text-accent">l'ostéopathie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            L'ostéopathie est une approche thérapeutique manuelle qui vise à rétablir l'équilibre du corps. 
            Elle traite non seulement les symptômes mais aussi les causes profondes des dysfonctionnements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-energy mb-4 flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-gradient-energy text-accent-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Une approche complémentaire au coaching sportif
            </h3>
            <p className="text-lg leading-relaxed opacity-95">
              En combinant ostéopathie et coaching sportif, Eloi propose une approche unique qui maximise 
              tes performances tout en préservant ta santé. Chaque séance est pensée pour t'aider à progresser 
              sans risque de blessure, en respectant la biomécanique naturelle de ton corps.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
