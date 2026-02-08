import { ExternalLink, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveStatusProps {
  isLive: boolean;
}

const LiveStatus = ({ isLive }: LiveStatusProps) => {
  if (!isLive) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center animate-bounce">
      <div className="flex items-center justify-center">
        <a
          href="https://www.youtube.com/@B4DLUCKY/live"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-full glow-live flex items-center justify-center shadow-lg"
          >
            <Radio className="w-5 h-5 mr-2 animate-pulse flex-shrink-0" />
            <span className="leading-none">ASSISTIR LIVE AGORA</span>
            <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default LiveStatus;
