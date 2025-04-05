import { Node } from '@tiptap/vue-3';

export interface ImageUploadOptions {
    upload: (file: File) => Promise<string>;
    acceptMimes: string[];
    maxSize: number;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageUpload: {
            setImageUpload: () => ReturnType;
        };
    }
}
export declare const ImageUpload: Node<ImageUploadOptions, any>;
export default ImageUpload;
