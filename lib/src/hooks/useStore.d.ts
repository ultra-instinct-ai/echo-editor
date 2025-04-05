import { ComputedRef } from 'vue';
import { AnyExtension } from '@tiptap/core';

/**
 * Interface representing an tiptap editor instance.
 */
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
    /**
     * Whether it is in fullscreen mode
     *
     * @default false
     */
    isFullscreen: boolean;
    /** Text color */
    color?: string;
    /** Highlight color */
    highlight?: string;
    /** AI Menu visibility */
    AIMenu: boolean;
    /** Preview visibility */
    showPreview: boolean;
    /** SpellCheck */
    spellCheck: boolean;
    /** FindAndReplace */
    findAndReplace: boolean;
    /** Printer */
    printer: boolean;
}
export declare const useTiptapStore: () => {
    state: Instance;
    isFullscreen: ComputedRef<boolean>;
    toggleFullscreen: () => void;
    togglePreview: () => void;
    toggleSpellCheck: () => void;
    toggleFindAndReplace: () => void;
    togglePrinter: () => void;
};
export {};
