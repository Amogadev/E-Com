import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild>
            <Link href="/generate-description">AI Tools</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="#">Start Selling</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
