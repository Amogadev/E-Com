import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, ShieldCheck, BarChart, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Global Reach',
    description: 'Sell to customers worldwide with our integrated logistics and multi-currency support.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Payments',
    description: 'Fast, secure, and reliable payment processing to keep your business and customers safe.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Powerful Tools',
    description: 'Access analytics, marketing tools, and our AI assistant to optimize your sales.',
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is here to help you around the clock, whenever you need it.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="pt-10 pb-20 md:pt-14 md:pb-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Sell with Chocobe?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide everything you need to build a successful online business.
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
