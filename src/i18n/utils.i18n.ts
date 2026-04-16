import { LANGUAGES, type Lang } from "./config.i18n";
import { ui } from "./ui.i18n";


const defafulLang = 'es'
export function getLangFromUrl(url: URL) {
    const [, lang ] = url.pathname.split('/')

    if (lang in LANGUAGES) return lang as keyof typeof LANGUAGES

    return defafulLang
}


export const useTranslations = (lang:Lang) => {
    return ui[lang]
}