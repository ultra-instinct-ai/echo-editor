import { Node } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export interface IframeOptions extends GeneralOptions<IframeOptions> {
    allowFullscreen: boolean;
    HTMLAttributes: {
        [key: string]: any;
    };
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            /**
             * Add an iframe
             */
            setIframe: (options: {
                src: string;
                service: string;
            }) => ReturnType;
        };
    }
}
export declare const Iframe: Node<IframeOptions, any>;
