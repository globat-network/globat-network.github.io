import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "GloBat",
  description:
    "Scientific network accelerating AI for bat acoustic monitoring.",
  href: "https://globat.github.io",
  author: "GloBat Team",
  locale: "en-GB",
};

export const NAV_LINKS: NavigationLinks = {
  home: {
    path: "/",
    label: "Home",
  },
  about: {
    path: "/about",
    label: "About",
    pages: {
      mission: { path: "/about/mission", label: "Our Mission" },
      team: { path: "/about/team", label: "Our Team" },
    },
  },
  // news: {
  //   path: "/news",
  //   label: "News",
  // },
  contact: {
    path: "/contact",
    label: "Get Involved",
    pages: {
      members: { path: "/contact/membership", label: "Become a Member" },
      contact: { path: "/contact/contact", label: "Contact Us" },
    },
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:globat-admin@googlegroups.com",
  },
};
