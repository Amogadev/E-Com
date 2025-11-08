import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FooterCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-accent animated-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-headline">
          Your business deserves to be seen. Join Chocobe today and start selling smarter.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join thousands of successful sellers who trust Chocobe to grow their brand.
        </p>
        <div className="flex flex-col items-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-lg scale-100 hover:scale-105 transition-transform" asChild>
                <Link href="#">
                    Start Selling Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <p className="text-sm text-primary-foreground/70">No fees. No limits. Just growth.</p>
        </div>
      </div>
    </section>
  );
}
