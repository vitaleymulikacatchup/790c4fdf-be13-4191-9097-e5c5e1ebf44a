use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Join"
          onButtonClick={() => { /* Button functionality */ }}
          className="bg-transparent"
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero 
          title="Welcome to NebulaMem"
          subtitle="Your gateway to the memecoin universe!"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout 
          title="What is NebulaMem?"
          descriptions={["NebulaMem is a cutting-edge memecoin that empowers the community,", "Join us in our journey to the moon."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          title="How to Buy NebulaMem"
          steps={[
            { title: "Step 1: Connect Wallet", description: "Connect your wallet to our platform.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2: Buy Tokens", description: "Purchase your NebulaMem coins easily.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3: Join the Community", description: "Become part of our vibrant community.", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Tokenomics"
          description="Exploring the sustainable structure of NebulaMem."
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "Total tokens in circulation.", icon: { icon: "Star" } },
            { value: "10%", description: "Liquidity", longDescription: "Liquidity pool for stability.", icon: { icon: "Shield" } },
            { value: "20%", description: "Team", longDescription: "Tokens reserved for the team.", icon: { icon: "Users" } },
          ]} 
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo 
          logoSrc="/images/logo.svg"
          logoAlt="NebulaMem Logo"
          logoText="NebulaMem"
          className="bg-transparent"
          svgClassName="h-10"
        />
      </div>
    </SiteThemeProvider>
  );
}
