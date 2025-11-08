import { Sofa } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Modern Nook Home">
      <Sofa className="h-8 w-8 text-primary" />
      <span className="text-2xl font-extrabold text-foreground font-headline">Modern Nook</span>
    </Link>
  );
}
