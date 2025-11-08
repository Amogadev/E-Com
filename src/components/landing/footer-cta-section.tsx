import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FooterCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-accent animated-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-headline">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join Chocobe today and turn your passion into a profitable business. It's free to get started.
        </p>
        <Button size="lg" variant="secondary" className="shadow-lg" asChild>
          <Link href="#">Sign Up Now</Link>
        </Button>
      </div>
    </section>
  );
}
