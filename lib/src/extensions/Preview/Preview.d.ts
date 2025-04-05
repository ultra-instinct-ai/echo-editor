import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../type';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        preview: {
            togglePreview: () => ReturnType;
        };
    }
}
export interface PreviewOptions extends GeneralOptions<PreviewOptions> {
}
export declare const Preview: Extension<PreviewOptions, any>;
