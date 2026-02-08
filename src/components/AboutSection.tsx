import { Gamepad2, Trophy, Ghost, Swords, Video, Scissors, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    { icon: Gamepad2, label: "Lives" },
    { icon: Trophy, label: "Platinas" },
    { icon: Ghost, label: "Terror" },
    { icon: Swords, label: "Competitivos" },
    { icon: Video, label: "Shorts" },
    { icon: Scissors, label: "Cortes" },
    { icon: MessageSquare, label: "Reacts" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-outlined">
              Sobre o Canal
            </h2>
            
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              🎮 Lives, Games Completos, Platinas, Jogos de Terror, Jogos Competitivos e muito mais!
            </p>
            
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              🔥 Também rolam shorts divertidos, curiosidades sobre games, cortes dos melhores momentos e até reacts exclusivos.
            </p>
            
            <p className="text-foreground/90 text-lg leading-relaxed mb-8">
              👉 Se você curte conteúdo variado sobre o mundo dos jogos, esse é o canal certo!
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border hover:border-primary transition-colors"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
