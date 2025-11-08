
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

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { DashboardHeader } from './header';

const menuItems = [
  {
    href: '/dashboard/overview',
    label: 'Overview',
    icon: LayoutGrid,
    active: true,
  },
  { href: '#', label: 'Products', icon: Package },
  { href: '#', label: 'Customer', icon: Users },
  { href: '#', label: 'Orders', icon: ShoppingBag },
  { href: '#', label: 'Shipment', icon: Compass },
  { href: '#', label: 'Store Setting', icon: Store },
  { href: '#', label: 'Platform Partner', icon: Share2 },
  { href: '#', label: 'Feedback', icon: MessageSquare },
  { href: '#', label: 'Help & Support', icon: HelpCircle },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={item.active}
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
      </SidebarInset>
    </SidebarProvider>
  );
}
