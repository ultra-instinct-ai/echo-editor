import { default as zhHans } from './locales/zh';
import { default as en } from './locales/en';

interface LocaleInterface {
    lang: string;
    message: Record<string, Record<string, string>>;
}
export declare const DEFAULT_LOCALE: LocaleInterface;
declare class Locale {
    private emitter;
    constructor();
    get lang(): string;
    set lang(lang: string);
    get message(): Record<string, Record<string, string>>;
    set message(message: Record<string, Record<string, string>>);
    loadLangMessage(lang: string): Record<string, string>;
    private isLangSupported;
    setLang(lang: string): void;
    registerWatchLang(hook: (lang: string) => void): {
        unsubscribe: () => void;
    };
    setMessage(lang: string, message: Record<string, string>): void;
    buildLocalesHandler(lang?: string): (path: string) => string;
}
declare const locale: Locale;
declare const useLocale: () => {
    lang: globalThis.Ref<string, string>;
    t: globalThis.ComputedRef<(path: string) => string>;
};
export default locale;
export { Locale, useLocale, zhHans, en };
