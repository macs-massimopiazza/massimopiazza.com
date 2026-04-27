import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/content/settings" }),
  schema: z.object({
    contact_email: z.string(),
    github_url: z.string(),
    linkedin_url: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description_sx: z.string(),
    description_dx: z.string(),

    sx_title: z.string().optional(),
    dx_title: z.string().optional(),
    works_title: z.string().optional(),
    projects_title: z.string().optional(),
    education_title: z.string().optional(),

    works: z.array(reference('work_experiences')).optional(),
    projects: z.array(reference('projects')).optional(),
    education: z.array(reference('education')).optional(),
  }),
});

const work_experiences = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    school: z.string(),
    period: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    status: z.string(),
    // Array di oggetti per i link multipli
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ).optional(),
    description: z.string(),
  }),
});

export const collections = {  
  settings, 
  pages, 
  work_experiences, 
  education, 
  projects  
};