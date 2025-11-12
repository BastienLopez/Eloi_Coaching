import hyroxImage from "@/assets/hyrox-training.jpg";
import { Activity, Dumbbell, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: "Remise en forme",
      description: "Retrouve énergie, tonicité et confiance en toi avec un programme sur-mesure",
      features: ["Programme 100% personnalisé", "Suivi hebdomadaire", "Progression à ton rythme", "Conseils nutrition"]
    },
    {
      icon: Activity,
      title: "Préparation Hyrox",
      description: "Maîtrise endurance, puissance et stratégie pour performer en compétition",
      features: ["Training spécifique Hyrox", "Plan périodisé", "Simulation de course", "Optimisation performance"],
      featured: true
    },
    {
      icon: Dumbbell,
      title: "Prévention ostéo",
      description: "Corrige déséquilibres, rééquilibre ton corps et préviens les blessures",
      features: ["Bilan postural complet", "Techniques ostéopathiques", "Récupération active", "Mobilité fonctionnelle"]
    },
    {
      icon: Users,
      title: "Coaching personnalisé",
      description: "Séances à domicile, en salle ou en extérieur selon tes préférences",
      features: ["Flexibilité horaire totale", "Programme 100% sur-mesure", "Suivi entre les séances", "Accompagnement motivationnel"]
    }
  ];

  return (
    <section id="programs" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern with better overlay for text readability */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${hyroxImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        {/* Add subtle overlay to improve text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-sm">
            Programmes <span className="text-accent">d'accompagnement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atteins tes objectifs avec un coaching sur-mesure adapté à tes besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm ${
                program.featured ? 'border-accent border-2 bg-card/95' : 'bg-card/90'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                program.featured ? 'bg-gradient-energy shadow-md' : 'bg-accent/10'
              }`}>
                <program.icon className={`w-7 h-7 ${
                  program.featured ? 'text-accent-foreground' : 'text-accent'
                }`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
              <ul className="space-y-2" role="list">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
