import strings from './strings.json';

export type Lang = 'en' | 'da';
export const LANGS: Lang[] = ['en', 'da'];

export type Localised<T = string> = T | { en: T; da: T };

/** Resolve a value that is either a plain string or an { en, da } object. */
export function pick<T>(value: Localised<T>, lang: Lang): T {
  if (value && typeof value === 'object' && 'en' in (value as object) && 'da' in (value as object)) {
    return (value as { en: T; da: T })[lang];
  }
  return value as T;
}

export function t(lang: Lang) {
  return strings[lang];
}

/** Root path of a language: "/" for English, "/da/" for Danish. */
export function langPath(lang: Lang): string {
  return lang === 'en' ? '/' : '/da/';
}
