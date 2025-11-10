
'use client';

import {
  LayoutGrid,
  Package,
  Users,
  ShoppingBag,
  Compass,
  Store,
  Share2,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { DashboardHeader } from './header';

const menuItems = [
  {
    href: '/dashboard/overview',
    label: 'Overview',
    icon: LayoutGrid,
  },
  { 
    label: 'Products', 
    icon: Package,
    href: '/dashboard/products',
  },
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/dashboard/customers', label: 'Customer', icon: Users },
  { href: '/dashboard/shipment', label: 'Shipment', icon: Compass },
  { href: '/dashboard/settings', label: 'Store Setting', icon: Store },
  { href: '/dashboard/partner', label: 'Platform Partner', icon: Share2 },
  { href: '/dashboard/feedback', label: 'Feedback', icon: MessageSquare },
  { href: '/dashboard/help', label: 'Help & Support', icon: HelpCircle },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                  <Link href={item.href!}>
                    <SidebarMenuButton
                      isActive={pathname.startsWith(item.href!)}
                      icon={item.icon}
                      tooltip={item.label}
                    >
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            {/* Add footer content here */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="p-4 md:p-6">{children}</main>
        <footer className="text-center text-sm text-muted-foreground p-4">
          © 2025 chocobe.
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
