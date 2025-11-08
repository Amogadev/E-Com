import { Header } from '@/components/landing/header';
import { PromoBanner } from '@/components/landing/promo-banner';
import { HeroSection } from '@/components/landing/hero-section';
import { BrandStatsSection } from '@/components/landing/brand-stats-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { SellingProcessSection } from '@/components/landing/selling-process-section';
import { StartSellingTodaySection } from '@/components/landing/start-selling-today-section';
import { SuccessStoriesSection } from '@/components/landing/success-stories-section';
import { FooterCtaSection } from '@/components/landing/footer-cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <PromoBanner />
      <main className="flex-1">
        <HeroSection />
        <BrandStatsSection />
        <FeaturesSection />
        <SellingProcessSection />
        <StartSellingTodaySection />
        <FooterCtaSection />
        <SuccessStoriesSection />
      </main>
      <Footer />
    </div>
  );
}
