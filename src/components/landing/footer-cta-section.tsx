import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift, HandCoins, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

const incentives = [
    {
        id: 'new-seller',
        icon: <Gift className="h-6 w-6 text-primary-foreground" />,
        badge: 'New Seller Incentives',
        title: 'Special offer for new sellers',
        features: [
            'Up to $2,600 worth of promotional ad credits.',
            'Free 2-month ad account management support.',
            'Up to $500 in potential rewards for adding more listings.',
        ],
    },
    {
        id: 'fee-drop',
        icon: <HandCoins className="h-6 w-6 text-primary-foreground" />,
        badge: 'Selling Fee Drop',
        title: 'Earn more, with lesser selling fee',
        features: [
            '0% referral fees on products under $30.',
            '$5 national shipping rates (previously $7).',
            'Up to 90% savings in selling fees on the sale of second unit.',
        ],
    },
    {
        id: 'payments',
        icon: <CalendarCheck className="h-6 w-6 text-primary-foreground" />,
        badge: 'Hassle-Free Payments',
        title: 'Pricing and 7-day payment cycle',
        features: [
            'Start with fees from 2% with clear category-based pricing.',
            'Get automatic secure payments directly to your bank account.',
            'Receive payments every 7 days, 6x faster than traditional retail.',
        ],
    },
];

export function FooterCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Get a head-start to selling with us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                {incentives.map((incentive) => (
                    <div key={incentive.id} className="relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent p-4 rounded-full shadow-lg border-4 border-secondary/50">
                            {incentive.icon}
                        </div>
                        <Card className="text-center h-full flex flex-col pt-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <div className="inline-block bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full text-sm mx-auto mb-4">{incentive.badge}</div>
                                <CardTitle className="text-2xl font-bold">{incentive.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <ul className="space-y-3 text-left text-muted-foreground mb-8">
                                    {incentive.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full">Want to know more</Button>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 px-10 shadow-lg scale-100 hover:scale-105 transition-transform" asChild>
                    <Link href="#">Create Your Seller Account</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
