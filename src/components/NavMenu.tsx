"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { NavigationLink } from "@/types";
import { NavItem } from "./NavItem";

export function NavMenu({ links }: { links: NavigationLink[] }) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {links.map((link) => (
          <NavItem key={link.path} link={link} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
