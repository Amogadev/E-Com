
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
  SidebarSubMenu,
  SidebarSubMenuButton,
  SidebarSubMenuItem,
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
    subMenu: [
      { href: '/dashboard/products', label: 'List' },
      { href: '/dashboard/products/grid', label: 'Grid' },
      { href: '/dashboard/products/1', label: 'Details' },
      { href: '/dashboard/products/1/edit', label: 'Edit' },
      { href: '/dashboard/products/create', label: 'Create' },
    ]
  },
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
  const pathname = usePathname();
  const isProductRoute = (path: string) => pathname.startsWith('/dashboard/products') && !pathname.includes('grid')
  
  const getActiveState = (subItemHref: string, subItemLabel: string) => {
    if (pathname === subItemHref) return true;
    if (subItemLabel === 'Details' && isProductRoute(pathname) && !pathname.endsWith('edit')) return true;
    if (subItemLabel === 'Edit' && isProductRoute(pathname) && pathname.endsWith('edit')) return true;
    return false;
  }

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
                {item.subMenu ? (
                  <SidebarSubMenu
                    icon={item.icon}
                    label={item.label}
                    active={item.subMenu.some(sub => getActiveState(sub.href, sub.label) || pathname.startsWith(sub.href))}
                  >
                    {item.subMenu.map((subItem) => (
                      <SidebarSubMenuItem key={subItem.label}>
                        <Link href={subItem.href}>
                          <SidebarSubMenuButton
                            isActive={getActiveState(subItem.href, subItem.label)}
                          >
                            {subItem.label}
                          </SidebarSubMenuButton>
                        </Link>
                      </SidebarSubMenuItem>
                    ))}
                  </SidebarSubMenu>
                ) : (
                  <Link href={item.href!}>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      icon={item.icon}
                      tooltip={item.label}
                    >
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                )}
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
