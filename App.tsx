import React from 'react';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import CaseStudySection from './components/CaseStudySection';
import AuthoritySection from './components/AuthoritySection';
import TargetAudienceSection from './components/TargetAudienceSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-dark-bg font-sans">
      <HeroSection />
      <VideoSection />
      <CaseStudySection />
      <AuthoritySection />
      <TargetAudienceSection />
      <Footer />
    </main>
  );
};

export default App;