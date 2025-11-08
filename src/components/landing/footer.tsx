import { Logo } from '@/components/logo';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              The all-in-one platform to launch and scale your e-commerce business.
            </p>
          </div>
          <nav className="flex flex-nowrap justify-center gap-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Chocobe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
