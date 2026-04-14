export const LANGUAGES = {
    es: 'es',
    en: 'en',
} as const;

export type Lang = keyof typeof LANGUAGES;