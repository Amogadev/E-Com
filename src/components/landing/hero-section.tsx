import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Circle, Triangle, Square } from 'lucide-react';
import { SellerStats } from '@/components/landing/seller-stats';

export function HeroSection() {
  const dashboardImage = PlaceHolderImages.find(img => img.id === 'dashboard-preview');

  return (
    <section className="pt-16 md:pt-28 pb-16 md:pb-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 -z-10"></div>
      
      {/* Floating Shapes */}
      <Circle className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/20 animate-pulse-slow" />
      <Square className="absolute top-1/2 right-1/4 w-12 h-12 text-accent/20 animate-float" />
      <Triangle className="absolute bottom-1/4 left-1/2 w-10 h-10 text-primary/10 animate-spin-slow" />
      <Circle className="absolute bottom-1/2 right-1/2 w-6 h-6 text-accent/10 animate-pulse-slow" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-4 font-headline">
              Chocobe – Build. Sell. Shine.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Turn your passion into profit — with ease and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/40 transition-shadow duration-300" asChild>
                <Link href="#">Start Selling for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm bg-background/50" asChild>
                <Link href="#">Learn More</Link>
              </Button>
            </div>
            <div className="mt-12 text-center md:text-left">
                <SellerStats />
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:aspect-[4/3] group">
            {dashboardImage && (
              <Image
                src={dashboardImage.imageUrl}
                alt={dashboardImage.description}
                data-ai-hint={dashboardImage.imageHint}
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
