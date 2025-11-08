import { Info } from 'lucide-react';
import Link from 'next/link';

export function PromoBanner() {
  return (
    <div className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-2 text-center text-sm">
        <Link href="#" className="inline-flex items-center gap-2 group">
            <Info className="h-4 w-4 text-accent" />
            <span className="font-medium">
                Ready to start selling online? Get powered with 36k worth benefits.
            </span>
            <span className="underline group-hover:no-underline ml-1">
                Explore now
            </span>
        </Link>
      </div>
    </div>
  );
}
