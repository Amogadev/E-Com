import { Info } from 'lucide-react';
import Link from 'next/link';

export function PromoBanner() {
  return (
    <div className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-3 text-center text-base">
        <Link href="#" className="inline-flex items-center gap-2 group">
            <Info className="h-5 w-5 text-accent" />
            <span className="font-medium">
                Limited Time: Free shipping on all orders over $500!
            </span>
            <span className="underline group-hover:no-underline ml-1">
                Shop now
            </span>
        </Link>
      </div>
    </div>
  );
}
