import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stories = [
  {
    id: 'avatar-1',
    name: 'Sarah L.',
    store: 'San Francisco, CA',
    quote: 'chocobe transformed my small apartment into a cozy, functional space. The quality is amazing for the price!',
  },
  {
    id: 'avatar-2',
    name: 'Mike R.',
    store: 'Austin, TX',
    quote: 'I\'m not a designer, but the AI tool helped me visualize my living room perfectly. The delivery was seamless and professional.',
  },
  {
    id: 'avatar-3',
    name: 'Jessica T.',
    store: 'New York, NY',
    quote: 'I\'m obsessed with my new dining set. It\'s the centerpiece of my home and I get so many compliments on it. Thank you, chocobe!',
  },
  {
    id: 'avatar-4',
    name: 'David Chen',
    store: 'Chicago, IL',
    quote: 'The customer service team was so helpful in picking out the right bookshelf for my home office. It fits the space perfectly.',
    },
    {
    id: 'avatar-5',
    name: 'Emily Wada',
    store: 'Los Angeles, CA',
    quote: 'Finally, a furniture store that gets my style. Everything is so well-curated and unique. I\'ll be back for more!',
    }
];

export function SuccessStoriesSection() {
  return (
    <section className="pt-10 pb-14 md:pt-14 md:pb-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">See what our customers are saying</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from people who built their dream homes with chocobe.
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
            {stories.map((story) => {
                const avatarImage = PlaceHolderImages.find(img => img.id === story.id);
                return(
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
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
