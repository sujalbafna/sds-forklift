'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FlaskConical, Home, ShieldHalf } from 'lucide-react';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons';

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Logo className="size-8 shrink-0 text-sidebar-primary" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-sidebar-primary-foreground">
              SDS Hub
            </h2>
            <p className="text-xs text-sidebar-foreground/80">
              Safety Data Management
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href="/" legacyBehavior passHref>
            <SidebarMenuButton
              isActive={pathname === '/'}
              tooltip={{
                children: 'Dashboard',
              }}
            >
              <Home />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/compliance" legacyBehavior passHref>
            <SidebarMenuButton
              isActive={pathname === '/compliance'}
              tooltip={{
                children: 'Compliance Analysis',
              }}
            >
              <FlaskConical />
              <span>Compliance Analysis</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
