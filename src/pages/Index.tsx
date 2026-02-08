import HeroBanner from "@/components/HeroBanner";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SetupSection from "@/components/SetupSection";
import CatSection from "@/components/CatSection";
import LiveStatus from "@/components/LiveStatus";
import Footer from "@/components/Footer";
import { useLiveStatus } from "@/hooks/useLiveStatus";

const Index = () => {
  const { isLive } = useLiveStatus();

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner isLive={isLive} />
      <ProfileSection />
      <AboutSection />
      <ScheduleSection />
      <SetupSection />
      <CatSection />
      <Footer />
      <LiveStatus isLive={isLive} />
    </div>
  );
};

export default Index;
