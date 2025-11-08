import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { SellingProcessSection } from '@/components/landing/selling-process-section';
import { SuccessStoriesSection } from '@/components/landing/success-stories-section';
import { FooterCtaSection } from '@/components/landing/footer-cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SellingProcessSection />
        <SuccessStoriesSection />
        <FooterCtaSection />
      </main>
      <Footer />
    </div>
  );
}
