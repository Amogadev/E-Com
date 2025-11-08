import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">See what our sellers have to say</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from sellers who built their dreams on Chocobe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => {
                const avatar = PlaceHolderImages.find(img => img.id === story.id);
                return (
                    <Card key={story.name} className="bg-background shadow-lg flex flex-col">
                        <CardContent className="flex flex-col items-center text-center p-8 md:p-10 flex-grow">
                            <p className="text-lg font-medium mb-6 italic text-foreground/80 flex-grow">"{story.quote}"</p>
                            <div className="flex flex-col items-center gap-4">
                                <Avatar className="h-20 w-20 border-2 border-primary/50 p-1">
                                    {avatar && (
                                        <AvatarImage src={avatar.imageUrl} alt={story.name} data-ai-hint={avatar.imageHint} />
                                    )}
                                    <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-xl">{story.name}</p>
                                    <p className="text-sm text-muted-foreground">{story.store}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  );
}
