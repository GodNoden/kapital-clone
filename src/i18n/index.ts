import es from './es.json';
import en from './en.json';
import fr from './fr.json';

export const languages = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

// Diccionarios
const dictionaries: Record<Lang, typeof es> = {
    es,
    en,
    fr,
};

/**
 * Obtiene el diccionario completo de un idioma
 */
export function getDictionary(lang: Lang) {
    return dictionaries[lang];
}

/**
 * Helper para traducir usando dot notation
 * Ejemplo: t('en', 'header.nav.business') → "Business"
 */
export function t(lang: Lang, key: string): string {
    const keys = key.split('.');
    let value: any = dictionaries[lang];

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            // Fallback a español si no existe la traducción
            let fallback: any = dictionaries.es;
            for (const fk of keys) {
                fallback = fallback?.[fk];
            }
            return typeof fallback === 'string' ? fallback : key;
        }
    }

    return typeof value === 'string' ? value : key;
}

/**
 * Genera la URL localizada
 * Ejemplo: localizedPath('en', '/empresas') → '/en/business'
 */
export function localizedPath(lang: Lang, path: string): string {
    if (lang === defaultLang) return path;
    return `/${lang}${path}`;
}