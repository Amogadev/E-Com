import { Search, ShoppingCart, Truck, Smile } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: '1. Discover Your Style',
    description: 'Browse our curated collections and find pieces that speak to you.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: '2. Place Your Order',
    description: 'Add items to your cart and check out securely in just a few clicks.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: '3. White-Glove Delivery',
    description: 'Schedule your delivery. We\'ll assemble everything in your room of choice.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: '4. Love Your Space',
    description: 'Enjoy your new furniture and the comfort of your beautifully designed home.',
  },
];

export function SellingProcessSection() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Furnish Your Home in 4 Easy Steps</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We've made it incredibly simple to create a home you'll love.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex items-center">
                <div className="flex-1 text-right pr-12">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-border z-10">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {step.icon}
                    </div>
                </div>
                <div className="flex-1 pl-12">
                  {index % 2 !== 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
