import { Instagram, Github, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/eloi_coachsteo/" },
    { icon: Github, label: "GitHub", href: "https://github.com/BastienLopez" }
  ];

  const handleInsta = () => {
    window.open('https://www.instagram.com/eloi_coachsteo/', '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-black mb-4">
              Eloi Coach <span className="text-accent">Sport & Ostéo</span>
            </h3>
            <p className="text-primary-foreground/80">
              Transforme ton corps. Libère ton potentiel.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright removed as requested (keeps cleaner footer) */}
      </div>

      {/* Floating Insta Button */}
      <button
        onClick={handleInsta}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-energy rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-accent-foreground" />
      </button>
    </footer>
  );
};
