import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base" asChild>
            <Link href="#">Start Selling</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
