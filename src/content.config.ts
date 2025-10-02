import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/news" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.enum(["admin"] as const),
      institution: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      links: z
        .object({
          linkedin: z.string().optional(),
          github: z.string().optional(),
          scholar: z.string().optional(),
          orcid: z.string().optional(),
          email: z.string().optional(),
          website: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { news, team };
