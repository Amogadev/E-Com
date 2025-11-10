import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { SellerStats } from '@/components/landing/seller-stats';

export function HeroSection() {
  const dashboardImage = PlaceHolderImages.find(img => img.id === 'dashboard-preview');

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4 font-headline">
              chocobe – Design Your Space, Define Your Style.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Discover curated furniture collections to turn your house into a home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/40 transition-shadow duration-300" asChild>
                <Link href="#">Explore Collections</Link>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm bg-background/50" asChild>
                <Link href="/dashboard/products">Our Products</Link>
              </Button>
            </div>
            <SellerStats />
          </div>
          <div className="relative h-64 md:h-auto md:aspect-[4/3] group">
            {dashboardImage && (
              <Image
                src={dashboardImage.imageUrl}
                alt={dashboardImage.description}
                data-ai-hint={dashboardImage.imageHint}
                fill
                priority
                className="object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
