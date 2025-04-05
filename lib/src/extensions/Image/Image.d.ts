export interface SetImageAttrsOptions {
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The title of the image. */
    title?: string;
    /** The width of the image. */
    width?: number | string | null;
    /** image FlipX */
    flipX?: boolean;
    /** image FlipY */
    flipY?: boolean;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageResize: {
            /**
             * Add an image
             */
            setImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
        };
    }
}
export declare const Image: import('@tiptap/core').Node<import('@tiptap/extension-image').ImageOptions, any>;
export default Image;
