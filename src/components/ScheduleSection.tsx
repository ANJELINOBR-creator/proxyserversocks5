import { Clock, Gamepad2, Target, Volume2, VolumeX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScheduleSection = () => {
  const schedules = [
    {
      icon: Target,
      title: "Jogos Competitivos",
      time: "16:00 - 19:00",
      description: "Geralmente multiplayer com os inscritos",
      note: "Geralmente mais cedo",
    },
    {
      icon: Gamepad2,
      title: "Outros Jogos",
      time: "19:00 - 21:00",
      description: "Variedade de games da biblioteca",
      note: "PS5 ou PC",
    },
    {
      icon: VolumeX,
      title: "Live do Mudinho",
      time: "Horário variado",
      description: "Lives especiais sem falar nada",
      note: "De vez em quando",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-outlined">
          <Clock className="inline-block w-8 h-8 mr-2 mb-1" />
          Horários das Lives
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {schedules.map((schedule) => (
            <Card
              key={schedule.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <schedule.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{schedule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-secondary mb-2">
                  {schedule.time}
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  {schedule.description}
                </p>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  {schedule.note}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
