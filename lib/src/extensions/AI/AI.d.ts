import { Node } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export interface MenuItem {
    label: string;
    prompt?: string;
    children?: MenuItem[];
}
export interface AIOptions extends GeneralOptions<AIOptions> {
    completions: (history: Array<{
        role: string;
        content: string;
    }>, signal?: AbortSignal) => Promise<any>;
    /**
     * AI Shortcuts Menu
     */
    shortcuts: MenuItem[];
}
export declare const AI: Node<AIOptions, any>;
