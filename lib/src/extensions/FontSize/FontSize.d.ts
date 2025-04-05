import { Extension } from '@tiptap/core';
import { GeneralOptions } from '../../type';

/**
 * Interface for font size menu items
 */
export interface Item {
    title: string;
    isActive: () => boolean;
    action: () => void;
    disabled: boolean;
    divider: boolean;
    default: boolean;
}
/**
 * Represents the interface for font size options, extending GeneralOptions.
 */
export interface FontSizeOptions extends GeneralOptions<FontSizeOptions> {
    types: string[];
    /**
     * List of available font size values
     *
     * @default DEFAULT_FONT_SIZE_LIST
     */
    fontSizes: string[];
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the text font size. ex: "12px", "2em", or "small". Must be a valid
             * CSS font-size
             * (https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}
export declare const FontSize: Extension<FontSizeOptions, any>;
