
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Star, ThumbsUp, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const feedbackTypes = [
    { id: 'suggestion', label: 'Suggestion', icon: <MessageSquare className="h-5 w-5" /> },
    { id: 'compliment', label: 'Compliment', icon: <ThumbsUp className="h-5 w-5" /> },
    { id: 'issue', label: 'Issue / Bug', icon: <MessageSquare className="h-5 w-5" /> },
];

export default function FeedbackPage() {
    const [rating, setRating] = useState(0);
    const { toast } = useToast();

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        toast({
            title: "Feedback Submitted!",
            description: "Thank you for helping us improve chocobe.",
        });
        // Here you would typically send the form data to a server
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-headline">Share Your Feedback</h1>
                <p className="text-lg text-muted-foreground mt-2">We value your opinion. Let us know how we can improve.</p>
            </div>

            <Card className="shadow-lg">
                <form onSubmit={handleFormSubmit}>
                    <CardHeader>
                        <CardTitle>Submit Feedback</CardTitle>
                        <CardDescription>How has your experience been?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="space-y-4">
                            <Label className="text-base font-semibold">How would you rate your overall experience?</Label>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-8 w-8 cursor-pointer transition-colors ${
                                            star <= rating
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300 hover:text-gray-400'
                                        }`}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-base font-semibold">What kind of feedback do you have?</Label>
                            <RadioGroup defaultValue="suggestion" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {feedbackTypes.map((type) => (
                                    <Label
                                        key={type.id}
                                        htmlFor={type.id}
                                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                    >
                                        <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                                        {type.icon}
                                        <span className="mt-2 font-medium">{type.label}</span>
                                    </Label>
                                ))}
                            </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="feedback-message" className="text-base font-semibold">Your message</Label>
                            <Textarea
                                id="feedback-message"
                                placeholder="Tell us more about your experience, what you loved, or what could be better..."
                                className="min-h-[150px]"
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" size="lg">
                            <Send className="mr-2 h-4 w-4" />
                            Send Feedback
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
