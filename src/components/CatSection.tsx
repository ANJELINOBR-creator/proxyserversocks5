import { Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import catStoryImage from "@/assets/cat-story.png";

const CatSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-card to-muted/30 backdrop-blur-sm border-border overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative animate-float">
                <img src={catStoryImage} alt="Gatinho preto" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="text-outlined">O Gatinho Preto</span>
                </h2>
                
                <p className="text-foreground/90 leading-relaxed mb-4">
                  O B4DLUCKY tem um gatinho preto em casa com uma história especial. 
                  O pequeno chegou praticamente traumatizado, mas hoje está em boas mãos 
                  e em condições muito melhores do que antes! 🖤
                </p>
                
                <p className="text-muted-foreground text-sm">
                  ✨ O overlay das lives tem gatinhos com pelos escuros inspirados nele!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CatSection;
