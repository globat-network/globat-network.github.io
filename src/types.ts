export type SiteConfiguration = {
  title: string;
  description: string;
  href: string;
  author: string;
  locale: string;
};

export type NavigationLinks = {
  [key: string]: NavigationLink;
};

export type NavigationLink = {
  label: string;
  path: string;
  pages?: NavigationLinks;
};

export type SocialLinks = {
  [key: string]: SocialLink;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Member = {
  name: string;
  email: string;
  institution: string;
  image: string;
  link: string;
}
