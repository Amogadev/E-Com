
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Award, Briefcase, TrendingUp, Zap, Building, Mail, User, Phone } from 'lucide-react';

const benefits = [
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: 'Expand Your Reach',
        description: 'Tap into our growing customer base and increase your brand visibility.',
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: 'Exclusive Resources',
        description: 'Access our marketing tools, sales data, and dedicated partner support.',
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: 'Co-Marketing Opportunities',
        description: 'Collaborate on campaigns, social media features, and events.',
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Drive Innovation',
        description: 'Work with us to develop new products and shape the future of home design.',
    },
];

export default function PlatformPartnerPage() {
    return (
        <div className="space-y-8">
            <div className="text-center p-8 bg-secondary/50 rounded-lg">
                <h1 className="text-4xl font-bold font-headline">Become a chocobe Partner</h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Join our ecosystem of leading brands and designers to create beautiful homes together.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit) => (
                    <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                {benefit.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Partner Application</CardTitle>
                    <CardDescription>Interested in partnering with us? Fill out the form below and we'll be in touch.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="company-name">Company Name</Label>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="company-name" placeholder="Your Company, Inc." className="pl-10" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contact-name">Contact Name</Label>
                             <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="contact-name" placeholder="John Doe" className="pl-10" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                             <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="email" type="email" placeholder="contact@yourcompany.com" className="pl-10" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                             <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="phone" type="tel" placeholder="(123) 456-7890" className="pl-10" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Tell us about your company</Label>
                        <Textarea id="message" placeholder="What makes your brand a great fit for chocobe?" className="min-h-[120px]" />
                    </div>
                </CardContent>
                 <CardFooter>
                    <Button size="lg">Submit Application</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
