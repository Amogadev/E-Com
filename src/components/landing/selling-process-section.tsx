import { UserPlus, PackagePlus, Rocket, Wallet } from 'lucide-react';

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
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Start Selling in 4 Easy Steps</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We've made it incredibly simple to launch your online store.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex items-center">
                <div className="flex-1 text-right pr-12">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-border z-10">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {step.icon}
                    </div>
                </div>
                <div className="flex-1 pl-12">
                  {index % 2 !== 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
