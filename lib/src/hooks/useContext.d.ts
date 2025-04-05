import { AnyExtension } from '@tiptap/core';

interface Instance {
    /**
     * List of extensions
     *
     * @default []
     */
    extensions: AnyExtension[];
    /**
     * Default language setting
     *
     * @default DEFAULT_LANG_VALUE
     */
    defaultLang?: string;
}
export declare function createContext(instance: Partial<Instance>): void;
export declare function useContext(): {
    state: Instance;
};
export {};
