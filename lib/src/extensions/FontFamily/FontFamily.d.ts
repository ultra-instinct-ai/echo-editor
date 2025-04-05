import { FontFamilyOptions as TiptapFontFamilyOptions } from '@tiptap/extension-font-family';
import { GeneralOptions } from '../../type';

export interface FontFamilyOptions extends TiptapFontFamilyOptions, GeneralOptions<FontFamilyOptions> {
    fontFamilyMap: {
        [key: string]: string;
    };
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontFamily: {
            /**
             * Set the text font family.
             * CSS font-size
             *
             */
            setFontFamily: (fontFamily: string) => ReturnType;
            /**
             * Unset the font family
             */
            unsetFontFamily: () => ReturnType;
        };
    }
}
export declare const FontFamily: import('@tiptap/core').Extension<FontFamilyOptions, any>;
