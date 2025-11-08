
'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Bell, UserCircle } from 'lucide-react';
import Link from 'next/link';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex-1">
          {/* Add any other header content here, like a search bar */}
        </div>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
           <Button variant="ghost" asChild>
            <Link href="/">Exit to Landing</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
