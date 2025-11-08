import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col" aria-label="Chocobe Home">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-foreground font-headline">Chocobe</span>
      </div>
      <span className="text-xs text-muted-foreground -mt-1 ml-px">Powering Next-Gen Sellers.</span>
    </Link>
  );
}
