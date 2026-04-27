import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    type: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    status: z.string(),
    url: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    school: z.string(),
    year: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    works: z.array(reference('works')).optional(),
    projects: z.array(reference('projects')).optional(),
    education: z.array(reference('education')).optional(),
  }),
});

export const collections = { pages, works, projects, education };