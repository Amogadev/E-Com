'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateDescription } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Bot, Clipboard } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  keywords: z.string().min(3, 'Please provide some keywords for your product.'),
  features: z.string().min(10, 'Please describe a few key features.'),
});

type FormValues = z.infer<typeof formSchema>;

export function GenerateDescriptionForm() {
    const [isPending, startTransition] = useTransition();
    const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            keywords: '',
            features: '',
        },
    });

    const onSubmit = (values: FormValues) => {
        setGeneratedDescription(null);
        startTransition(async () => {
            try {
                const description = await generateDescription(values);
                setGeneratedDescription(description);
            } catch (error) {
                toast({
                    variant: 'destructive',
                    title: 'Generation Failed',
                    description: error instanceof Error ? error.message : 'An unknown error occurred.',
                });
            }
        });
    };

    const copyToClipboard = () => {
        if (generatedDescription) {
            navigator.clipboard.writeText(generatedDescription);
            toast({
                title: 'Copied to Clipboard',
                description: 'The product description has been copied.',
            });
        }
    };
    
    return (
        <div className="space-y-8">
            <Card className="shadow-lg">
                <CardContent className="pt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="keywords"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Product Keywords</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., wireless, bluetooth, noise-cancelling headphones" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="features"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base">Product Features</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe the main features. e.g., 40-hour battery life, foldable design, built-in microphone, premium materials."
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                                {isPending ? (
                                    'Generating...'
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        Generate Description
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {(isPending || generatedDescription) && (
                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                           <Bot className="text-primary h-6 w-6"/> AI Generated Description
                        </CardTitle>
                        {generatedDescription && (
                            <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                                <Clipboard className="h-5 w-5"/>
                                <span className="sr-only">Copy to clipboard</span>
                            </Button>
                        )}
                    </CardHeader>
                    <CardContent>
                        {isPending && (
                             <div className="space-y-3">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                             </div>
                        )}
                        {generatedDescription && (
                            <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{generatedDescription}</p>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
