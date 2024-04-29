import { z } from "zod";

export const createVideoSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    genre: z.string().min(1),
    video: z.string().min(1).url()
});

export const updateVideoSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    genre: z.string().min(1),
    video: z.string().min(1).url()
}).partial();