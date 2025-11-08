'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { LogIn } from 'lucide-react';

const formSchema = z.object({
  username: z.string().min(1, 'Please enter your username.'),
  password: z.string().min(1, 'Please enter your password.'),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = (values: FormValues) => {
        // Placeholder for login logic
        console.log('Login attempt with:', values);
        toast({
            title: 'Login Attempted',
            description: 'This is a demo. Login functionality is not implemented.',
        });
    };
    
    return (
        <Card className="shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
                <div className="mx-auto w-fit bg-primary/10 p-4 rounded-full mb-4">
                    <LogIn className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">Welcome Back!</CardTitle>
                <CardDescription className="text-lg">Sign in to continue to your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="your.username" {...field} className="py-6 text-base" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} className="py-6 text-base" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                            Log In
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
