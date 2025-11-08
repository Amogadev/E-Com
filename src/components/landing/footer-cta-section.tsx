import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift, HandCoins, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

const incentives = [
    {
        id: 'new-seller',
        icon: <Gift className="h-6 w-6 text-primary-foreground" />,
        badge: 'Welcome Kit',
        title: 'New Seller Welcome Kit',
        features: [
            'Free access to our AI-powered listing generator.',
            '$100 in ad credits to kickstart your marketing.',
            'A one-on-one strategy session with an e-commerce expert.',
        ],
    },
    {
        id: 'fee-drop',
        icon: <HandCoins className="h-6 w-6 text-primary-foreground" />,
        badge: 'Lower Fees',
        title: 'Keep More of Your Earnings',
        features: [
            'Flat 1% transaction fee on your first 100 sales.',
            'Zero listing fees for your first 50 products.',
            'Exclusive discounts on shipping and packaging supplies.',
        ],
    },
    {
        id: 'payments',
        icon: <CalendarCheck className="h-6 w-6 text-primary-foreground" />,
        badge: 'Faster Payouts',
        title: 'Get Paid Sooner',
        features: [
            'Access your earnings in as little as 3 business days.',
            'Instant payouts available for a small convenience fee.',
            'Transparent fee structure with no hidden charges.',
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
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent p-3 rounded-full shadow-lg border-4 border-secondary/50">
                            {incentive.icon}
                        </div>
                        <Card className="text-center h-full flex flex-col pt-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="p-4">
                                <div className="inline-block bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full text-sm mx-auto mb-2">{incentive.badge}</div>
                                <CardTitle className="text-xl font-bold">{incentive.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between p-4">
                                <ul className="space-y-2 text-left text-muted-foreground text-sm mb-6">
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
                    <Link href="#">Create Your Seller Account</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
