import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 font-headline">
              Launch Your Business with LaunchPad
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The ultimate platform to start, manage, and grow your e-commerce empire. Join thousands of successful sellers today.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" asChild>
              <Link href="#">Start Selling for Free</Link>
            </Button>
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
