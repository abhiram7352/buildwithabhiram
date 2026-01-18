import HeroSection from '../components/HeroSection';
import WhySection from '../components/sections/WhySection';
import WhatImBuildingSection from '../components/sections/WhatImBuildingSection';
import ProofSection from '../components/sections/ProofSection';
import CTASection from '../components/common/CTASection';

function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <WhatImBuildingSection />
      <ProofSection />
      <CTASection 
        title="Ready to Accelerate Your Career?"
        description="Join hundreds of professionals who have transformed their careers with practical guidance and real-world experience."
        primaryCTA={<a href="https://forms.gle/YtKZWdrEeNYENQFg6" target="_blank" rel="noopener noreferrer">Work With Me</a>}
        secondaryCTA={<a href="https://forms.gle/YtKZWdrEeNYENQFg6" target="_blank" rel="noopener noreferrer">Book a Session</a>}
      />
    </main>
  );
}

export default Home;