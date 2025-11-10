
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LifeBuoy, BookOpen, MessageCircle, Search, Mail, Phone, Clock } from 'lucide-react';

const faqs = [
    {
        question: "How do I track my order?",
        answer: "You can track your order from the 'Shipment' page in your dashboard. You'll find the tracking number and carrier information for each shipment."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 100-day return policy for all items. If you're not satisfied with your purchase, you can initiate a return from the 'Orders' page."
    },
    {
        question: "How do I update my account information?",
        answer: "You can update your profile, social media links, and notification preferences from the 'Store Setting' page."
    },
    {
        question: "Do you offer design services?",
        answer: "Yes, we offer complimentary design services to help you create your perfect space. Contact our support team to schedule a consultation."
    },
     {
        question: "How can I become a platform partner?",
        answer: "We'd love to hear from you! Please visit the 'Platform Partner' page and fill out the application form. Our team will review it and get back to you."
    }
];

const supportChannels = [
    {
        icon: <Mail className="h-6 w-6 text-primary" />,
        title: "Email Support",
        description: "Send us an email and we'll get back to you within 24 hours.",
        contact: "support@chocobe.com",
        action: "Send Email"
    },
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        title: "Phone Support",
        description: "Speak directly with our support team for immediate assistance.",
        contact: "+1 (800) 555-0199",
        action: "Call Now"
    },
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Business Hours",
        description: "Our team is available to help during the following hours:",
        contact: "Mon-Fri, 9am - 6pm EST",
        action: "View Hours"
    },
]

export default function HelpAndSupportPage() {
    return (
        <div className="space-y-8">
            <div className="text-center p-8 bg-secondary/50 rounded-lg">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                   <LifeBuoy className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-headline">Help & Support Center</h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                    We're here to help. Find answers to your questions or get in touch with our team.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                 <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search for answers..." className="pl-12 h-12 text-base" />
                </div>

                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>

            <div className="text-center mt-12">
                 <h2 className="text-3xl font-bold font-headline">Still Need Help?</h2>
                <p className="text-lg text-muted-foreground mt-2">Our support team is here for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {supportChannels.map((channel) => (
                    <Card key={channel.title} className="text-center flex flex-col">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                               {channel.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <h3 className="text-lg font-semibold">{channel.title}</h3>
                             <p className="text-sm text-muted-foreground mt-1 mb-4">{channel.description}</p>
                             <p className="font-semibold text-primary">{channel.contact}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
