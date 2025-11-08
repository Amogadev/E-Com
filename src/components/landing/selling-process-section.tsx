import { UserPlus, PackagePlus, Rocket, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: '1. Create Account',
    description: 'Sign up in minutes. All you need is an email to get started.',
  },
  {
    icon: <PackagePlus className="h-8 w-8 text-primary" />,
    title: '2. List Products',
    description: 'Use simple tools or our AI to create beautiful product listings.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: '3. Start Selling',
    description: 'Launch your store and start receiving orders from everywhere.',
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: '4. Get Paid',
    description: 'Receive earnings through fast and secure payouts to your bank.',
  },
];

export function SellingProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Start Selling in 4 Easy Steps</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We've made it incredibly simple to launch your online store.
          </p>
        </div>
        <div className="relative">
            <div
                className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-border"
            ></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => (
              <Card key={step.title} className="relative text-center bg-card shadow-sm z-10 border hover:border-primary/50">
                <CardHeader>
                    <div className="mx-auto w-fit mb-4 p-4 bg-primary/10 rounded-xl">
                        {step.icon}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
