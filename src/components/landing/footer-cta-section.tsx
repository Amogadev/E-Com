import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift, Percent, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

const incentives = [
    {
        id: 'new-member',
        icon: <Gift className="h-6 w-6 text-primary-foreground" />,
        badge: 'New Member Offer',
        title: 'Your Welcome Gift',
        features: [
            'Free access to our AI-powered room designer.',
            '$50 off your first order of $500 or more.',
            'A one-on-one consultation with a design expert.',
        ],
    },
    {
        id: 'seasonal-sale',
        icon: <Percent className="h-6 w-6 text-primary-foreground" />,
        badge: 'Seasonal Sale',
        title: 'Save on Style',
        features: [
            'Up to 20% off select living room collections.',
            'Special financing options available.',
            'Exclusive deals on outdoor and patio furniture.',
        ],
    },
    {
        id: 'insider-perks',
        icon: <CalendarCheck className="h-6 w-6 text-primary-foreground" />,
        badge: 'Insider Perks',
        title: 'Join Our Community',
        features: [
            'Early access to new arrivals and sales events.',
            'Invitations to exclusive design workshops.',
            'Earn reward points on every purchase.',
        ],
    },
];

export function FooterCtaSection() {
  return (
    <section className="pt-10 pb-8 md:pt-14 md:pb-10 bg-secondary/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Start Designing Your Dream Home</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
                {incentives.map((incentive) => (
                    <div key={incentive.id} className="relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent p-3 rounded-full shadow-lg border-4 border-secondary/50">
                            {incentive.icon}
                        </div>
                        <Card className="text-center h-full flex flex-col pt-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="p-3">
                                <div className="inline-block bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full text-xs mx-auto mb-2">{incentive.badge}</div>
                                <CardTitle className="text-lg font-bold">{incentive.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between p-4">
                                <ul className="space-y-2 text-left text-muted-foreground text-sm mb-4">
                                    {incentive.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 px-10 shadow-lg scale-100 hover:scale-105 transition-transform" asChild>
                    <Link href="#">Sign Up & Save</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
