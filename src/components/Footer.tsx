import { Heart, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="https://www.youtube.com/@B4DLUCKY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          <Youtube className="w-5 h-5" />
          <span className="font-medium">@B4DLUCKY</span>
        </a>
        
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Feito com <Heart className="w-4 h-4 text-red-500" /> para a comunidade
        </p>
      </div>
    </footer>
  );
};

export default Footer;
