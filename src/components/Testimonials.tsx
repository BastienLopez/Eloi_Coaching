import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      program: "Remise en forme",
      text: "Grâce à Eloi, j'ai retrouvé confiance en moi et en mon corps. Ses conseils sont précieux et il sait s'adapter à mon rythme.",
      rating: 5,
      result: "-8kg en 3 mois"
    },
    {
      name: "Thomas D.",
      program: "Préparation Hyrox",
      text: "Grâce à Eloi, j'ai terminé mon premier Hyrox ! Son approche globale m'a permis de progresser sans me blesser.",
      rating: 5,
      result: "1er Hyrox réussi"
    },
    {
      name: "Sophie M.",
      program: "Suivi ostéopathique",
      text: "Un vrai professionnel qui allie performance et santé. Mes douleurs ont disparu et je me sens plus forte que jamais.",
      rating: 5,
      result: "Douleurs disparues"
    },
    {
      name: "Alexandre P.",
      program: "Coaching personnalisé",
      text: "Eloi est à l'écoute et ultra motivant. Chaque séance est un challenge adapté à mes objectifs. Je recommande à 100% !",
      rating: 5,
      result: "+15% force"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ils ont <span className="text-accent">transformé</span> leur vie
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvre les témoignages de ceux qui ont franchi le cap
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-glow hover:border-accent/50 transition-all duration-300 relative group"
            >
              {/* Quote icon decoration */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-colors" aria-hidden="true" />
              
              {/* Rating stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} étoiles sur 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-sm mb-4 leading-relaxed italic">"{testimonial.text}"</p>
              
              {/* Result badge */}
              {testimonial.result && (
                <div className="mb-4 inline-block">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    ✓ {testimonial.result}
                  </span>
                </div>
              )}
              
              {/* Author info: name and program on same line */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-start gap-3">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
