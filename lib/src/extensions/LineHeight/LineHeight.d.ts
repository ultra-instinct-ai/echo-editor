import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export interface LineHeightOptions extends GeneralOptions<LineHeightOptions> {
    types: string[];
    lineHeights: string[];
    defaultHeight: string;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}
export declare const LineHeight: Extension<LineHeightOptions, any>;
