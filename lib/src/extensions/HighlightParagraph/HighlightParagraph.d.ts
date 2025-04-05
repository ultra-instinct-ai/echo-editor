import { PluginKey } from '@tiptap/pm/state';
import { Extension } from '@tiptap/core';

export declare const HighlightParagraphKey: PluginKey<any>;
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        'highlight-paragraph': {
            /**
             * @description Set search term in extension.
             */
            setHighlightParagraph: (pos: any) => ReturnType;
            /**
             * @description Set replace term in extension.
             */
            clearHighlightParagraph: () => ReturnType;
        };
    }
}
export declare const HighlightParagraph: Extension<any, any>;
