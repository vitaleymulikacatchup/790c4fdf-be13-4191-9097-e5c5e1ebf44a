"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navLinks = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" }
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "highlight" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navLinks} logoSrc="/images/logo.svg" logoWidth={200} logoHeight={50} buttonText="Join" onButtonClick={() => {}} />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero title="Welcome to NebulaMem" subtitle="The future of memecoins awaits!" primaryButtonText="Join Us" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="About NebulaMem" descriptions={["A futuristic memecoin for the visionary!", "Join us in redefining the crypto landscape."]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics" description="Explore our token distribution and circulation strategy." tokenData={[{ value: "1M", description: "Total Supply" }, { value: "700K", description: "Circulating Supply" }, { value: "300K", description: "Locked Supply" }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase logoSrc="/images/logo.svg" logoWidth={200} logoHeight={50} columns={[{ title: "Links", items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "How To Buy", onClick: () => {} }, { label: "Tokenomics", onClick: () => {} }] }, { title: "Contact", items: [{ label: "Support", onClick: () => {} }, { label: "Feedback", onClick: () => {} }] }, { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }]} copyrightText="© 2023 NebulaMem" onPrivacyClick={() => {}} />
      </div>
    </SiteThemeProvider>
  );
}
