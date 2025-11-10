'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Bell, User, Moon, Settings, Clock, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';

function getPageTitle(pathname: string) {
    if (pathname.startsWith('/dashboard/products')) {
        return 'Product List';
    }
    if (pathname.startsWith('/dashboard/overview')) {
        return 'Overview';
    }
    return 'Dashboard';
}

export function DashboardHeader() {
    const pathname = usePathname();
    const title = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex-1">
            <h1 className="text-xl font-semibold tracking-wider uppercase text-muted-foreground">{title}</h1>
        </div>
        <nav className="ml-auto flex items-center gap-2 sm:gap-4">
          <div className="relative w-full max-w-sm items-center">
            <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8"
            />
            <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Moon className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="relative">
             <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
             </Button>
             <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">3</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Clock className="h-5 w-5" />
            <span className="sr-only">History</span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://picsum.photos/seed/avatar/40/40" alt="User avatar" />
            <AvatarFallback>
                <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  );
}
