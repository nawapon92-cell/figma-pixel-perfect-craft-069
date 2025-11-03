import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { CallToActionSection } from '@/components/landing/CallToActionSection';
import { AudienceSection } from '@/components/landing/AudienceSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <main>
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToActionSection />
        <AudienceSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
