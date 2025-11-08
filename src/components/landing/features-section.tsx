import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, ShieldCheck, BarChart, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Global Reach',
    description: 'Sell to customers worldwide with our integrated logistics and multi-currency support.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Secure Payments',
    description: 'Fast, secure, and reliable payment processing to keep your business and customers safe.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Powerful Tools',
    description: 'Access analytics, marketing tools, and our AI assistant to optimize your sales.',
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is here to help you around the clock, whenever you need it.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Sell with LaunchPad?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide everything you need to build a successful online business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {feature.icon}
                </div>
                <CardTitle className="pt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
