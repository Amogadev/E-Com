import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export function StartSellingTodaySection() {
    const sectionImage = PlaceHolderImages.find(img => img.id === 'packaging-delivery');

    return (
        <section className="py-10 md:py-14 bg-background">
            <div className="container mx-auto px-4">
                <div className="bg-secondary/50 rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="p-8 md:p-16 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Start selling today!</h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
                                Put your products in front of millions of customers who are ready to discover them.
                            </p>
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                                <Link href="#">Start Selling</Link>
                            </Button>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] w-full">
                            {sectionImage && (
                                <Image
                                    src={sectionImage.imageUrl}
                                    alt={sectionImage.description}
                                    data-ai-hint={sectionImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
