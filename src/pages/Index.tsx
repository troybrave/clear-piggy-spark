import HeroSection from '@/components/ui/hero-section';
import { MouseTrail } from '@/components/ui/mouse-trail';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MouseTrail />
      <HeroSection />
    </div>
  );
};

export default Index;
