import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 animated-gradient -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-4 font-headline">
              Chocobe – Build. Sell. Shine.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Turn your passion into profit — with ease and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg" asChild>
                <Link href="#">Start Selling for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm" asChild>
                <Link href="#">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:aspect-[4/3]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
