import { z } from 'zod';
import { insertInquirySchema, insertSubscriberSchema, insertSpaceSchema, insertStorySchema, spaces, stories, inquiries, subscribers } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
  conflict: z.object({
    message: z.string(),
  }),
};

export const api = {
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        201: z.custom<typeof inquiries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  subscribers: {
    create: {
      method: 'POST' as const,
      path: '/api/subscribers',
      input: insertSubscriberSchema,
      responses: {
        201: z.custom<typeof subscribers.$inferSelect>(),
        400: errorSchemas.validation,
        409: errorSchemas.conflict,
      },
    },
  },
  spaces: {
    list: {
      method: 'GET' as const,
      path: '/api/spaces',
      responses: {
        200: z.array(z.custom<typeof spaces.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/spaces/:slug',
      responses: {
        200: z.custom<typeof spaces.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  stories: {
    list: {
      method: 'GET' as const,
      path: '/api/stories',
      responses: {
        200: z.array(z.custom<typeof stories.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/stories/:slug',
      responses: {
        200: z.custom<typeof stories.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type InquiryInput = z.infer<typeof insertInquirySchema>;
export type SubscriberInput = z.infer<typeof insertSubscriberSchema>;
