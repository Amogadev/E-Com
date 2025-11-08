import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, ShieldCheck, Gem, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Fast White-Glove Delivery',
    description: 'Get your furniture delivered and assembled in your room of choice, hassle-free.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: '100-Day Return Policy',
    description: 'Shop with confidence. If you don\'t love it, we\'ll come pick it up.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Built to Last',
    description: 'We use high-quality, sustainable materials to create furniture you can enjoy for years.',
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: 'Design Support',
    description: 'Our team of design experts is here to help you create your perfect space.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="pt-10 pb-10 md:pt-14 md:pb-14 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Shop with Modern Nook?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide everything you need to furnish a home you'll love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-xl">
                    {feature.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
