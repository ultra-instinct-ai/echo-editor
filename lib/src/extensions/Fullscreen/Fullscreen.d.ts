import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export interface FullscreenOptions extends GeneralOptions<FullscreenOptions> {
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fullscreen: {
            setFullscreen: () => ReturnType;
        };
    }
}
export declare const Fullscreen: Extension<FullscreenOptions, any>;
