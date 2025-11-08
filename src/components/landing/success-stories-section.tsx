import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
  {
    id: 'avatar-4',
    name: 'David Chen',
    store: 'Home Brew Bros',
    quote: 'The analytics tools are a game-changer. I can see exactly what\'s working and make smarter decisions for my business.',
    },
    {
    id: 'avatar-5',
    name: 'Emily Wada',
    store: 'Petal Perfect',
    quote: 'Customer support is top-notch. They\'re always quick to respond and incredibly helpful whenever I have a question.',
    }
];

export function SuccessStoriesSection() {
  return (
    <section className="pt-10 pb-14 md:pt-14 md:pb-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">See what our sellers have to say</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from sellers who built their dreams on Chocobe.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {stories.map((story) => (
                <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
                     <div className="p-1 h-full">
                        <Card className="bg-background shadow-lg flex flex-col h-full">
                            <CardContent className="flex flex-col items-center text-center p-8 md:p-10 flex-grow">
                                <p className="text-lg font-medium mb-6 italic text-foreground/80 flex-grow">"{story.quote}"</p>
                                <div className="flex flex-col items-center gap-4">
                                    <Avatar className="h-20 w-20 border-2 border-primary/50 p-1">
                                        <AvatarFallback>
                                            <User className="h-10 w-10 text-muted-foreground" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-xl">{story.name}</p>
                                        <p className="text-sm text-muted-foreground">{story.store}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                     </div>
                </CarouselItem>
                )
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
