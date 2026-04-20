// src/actions/index.ts
import { defineAction } from 'astro:actions';

export const server = {
    miAccion: defineAction({
        handler: async (input) => {
            return { success: true };
        },
    }),
};