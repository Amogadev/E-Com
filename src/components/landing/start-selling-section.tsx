import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export function StartSellingSection() {
  const sellingImage = PlaceHolderImages.find(img => img.id === 'packaging-delivery');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Start selling today!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Put your products in front of millions of customers who search for great furniture everyday.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#">Start selling</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-80 order-1 md:order-2">
            {sellingImage && (
              <Image
                src={sellingImage.imageUrl}
                alt={sellingImage.description}
                data-ai-hint={sellingImage.imageHint}
                fill
                className="object-cover rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
