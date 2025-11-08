import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stories = [
  {
    id: 'avatar-1',
    name: 'Sarah L.',
    store: 'Artisan Creations',
    quote: 'Chocobe transformed my hobby into a thriving business. The tools are intuitive and my sales have tripled in just six months!',
  },
  {
    id: 'avatar-2',
    name: 'Mike R.',
    store: 'Gadget Grove',
    quote: 'As a non-technical person, I was worried about starting an online store. Chocobe made it so easy. I was up and running in a day.',
  },
  {
    id: 'avatar-3',
    name: 'Jessica T.',
    store: 'Vintage Finds',
    quote: 'The global reach is incredible. I\'m now shipping my vintage clothing to customers on three different continents. Thank you, Chocobe!',
  },
];

export function SuccessStoriesSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Join Our Community of Success</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from sellers who built their dreams on Chocobe.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {stories.map((story) => {
                const avatar = PlaceHolderImages.find(img => img.id === story.id);
                return (
                    <CarouselItem key={story.name}>
                        <div className="p-1">
                            <Card className="border-0 shadow-none">
                                <CardContent className="flex flex-col items-center text-center p-8 md:p-12">
                                    <p className="text-xl font-medium mb-6 italic text-foreground/80">"{story.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            {avatar && (
                                                <AvatarImage src={avatar.imageUrl} alt={story.name} data-ai-hint={avatar.imageHint} />
                                            )}
                                            <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-lg">{story.name}</p>
                                            <p className="text-sm text-muted-foreground">{story.store}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
