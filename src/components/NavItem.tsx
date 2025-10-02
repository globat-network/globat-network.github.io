"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { NavigationLink } from "@/types";

export function NavItem({ link }: { link: NavigationLink }) {
  if (link.pages == null) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <a href={link.path}>{link.label}</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-4 w-[200px]">
          <li>
            {Object.values(link.pages).map((page) => (
              <NavigationMenuLink asChild>
                <a href={page.path}>{page.label}</a>
              </NavigationMenuLink>
            ))}
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
