import { Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/33600000000', '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
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

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:contact@eloicoach.fr" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                contact@eloicoach.fr
              </a>
              <a href="tel:+33600000000" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                06 00 00 00 00
              </a>
            </div>
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
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <Button 
            onClick={handleWhatsApp}
            variant="hero"
            size="lg"
            className="w-full md:w-auto"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact rapide WhatsApp
          </Button>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Eloi Coach Sport & Ostéo – Tous droits réservés</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-energy rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-accent-foreground" />
      </button>
    </footer>
  );
};
