import { Node } from '@tiptap/core';
import { GeneralOptions } from '../../type';
import { Editor } from '@tiptap/vue-3';

export interface MenuItem {
    label: string;
    prompt?: string;
    children?: MenuItem[];
}
export interface AIOptions extends GeneralOptions<AIOptions> {
    completions: (history: Array<{
        role: string;
        content: string;
    }>, signal?: AbortSignal, editor?: Editor) => Promise<any>;
    /**
     * AI Shortcuts Menu
     */
    shortcuts: MenuItem[];
}
export declare const AI: Node<AIOptions, any>;
