import { Monitor, Gamepad } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SetupSection = () => {
  const setups = [
    {
      icon: Gamepad,
      title: "PlayStation 5 Fat",
      description: "Console principal para jogos mais pesados e títulos famosos",
      games: "COD, AAA Games, Platinas",
    },
    {
      icon: Monitor,
      title: "PC",
      description: "Para jogos mais leves e streams variadas",
      games: "Indie Games, Jogos leves",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-outlined">
          <Gamepad className="inline-block w-8 h-8 mr-2 mb-1" />
          Setup
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {setups.map((setup) => (
            <Card
              key={setup.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <setup.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{setup.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{setup.description}</p>
                <p className="text-sm text-secondary font-medium">{setup.games}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
