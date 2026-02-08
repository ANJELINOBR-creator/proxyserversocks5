import bannerImage from "@/assets/banner.png";

interface HeroBannerProps {
  isLive: boolean;
}

const HeroBanner = ({ isLive }: HeroBannerProps) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <img
        src={bannerImage}
        alt="B4DLUCKY Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {isLive && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full glow-live">
          <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider text-sm">AO VIVO</span>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
