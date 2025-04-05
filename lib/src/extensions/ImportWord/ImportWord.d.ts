import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export interface ImportWordOptions extends GeneralOptions<ImportWordOptions> {
    /**
     * Function for custom wort to html
     */
    convert?: (file: File) => Promise<string>;
    /** Function for uploading images */
    upload?: (files: File[]) => Promise<unknown>;
    /**
     * File Size limit
     *
     * @default 1024 * 1024 * 10
     */
    limit: number;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        importWord: {
            /**
             * toggle import from word
             */
            toggleImportWord: () => ReturnType;
        };
    }
}
export declare const ImportWord: Extension<ImportWordOptions, any>;
