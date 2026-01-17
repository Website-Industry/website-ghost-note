import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.enum(['atelier', 'cdmc', 'cours-individuels', 'autre']),
    city: z.string().optional(),
    venue: z.string().optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    level: z.string().optional(),
    cta_label: z.string().optional(),
    cta_url: z.string().optional(),
  }),
});

export const collections = {
  events,
};

