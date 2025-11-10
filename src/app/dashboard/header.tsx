'use client';
import { useState, useEffect } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Bell, User, Moon, Sun, Settings, Clock, Search, LogOut, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function getPageTitle(pathname: string) {
    if (pathname.startsWith('/dashboard/products/grid')) {
        return 'Product Grid';
    }
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
    const { toast } = useToast();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.className = localTheme;
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem('theme', newTheme);
        toast({
            title: `Theme changed to ${newTheme}`,
        });
    };

    const handleFeatureClick = (featureName: string) => {
        toast({
            title: 'Coming Soon!',
            description: `${featureName} feature is under development.`,
        });
    };

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
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="relative">
             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleFeatureClick('Notifications')}>
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
             </Button>
             <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">3</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleFeatureClick('Settings')}>
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleFeatureClick('History')}>
            <Clock className="h-5 w-5" />
            <span className="sr-only">History</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="https://picsum.photos/seed/avatar/40/40" alt="User avatar" />
                    <AvatarFallback>
                        <User className="h-5 w-5" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleFeatureClick('Profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFeatureClick('Dashboard')}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFeatureClick('Settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/login" className="flex items-center w-full">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
