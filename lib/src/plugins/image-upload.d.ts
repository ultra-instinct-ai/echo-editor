import { Plugin } from '@tiptap/pm/state';
import { DecorationSet, EditorView } from '@tiptap/pm/view';

export declare const UploadImagesPlugin: () => Plugin<DecorationSet>;
export interface ImageUploadOptions {
    validateFn?: (file: File) => boolean;
    onUpload: (file: File) => Promise<string | object>;
}
export type UploadFn = (files: File[], view: EditorView, pos: number) => void;
export declare const createImageUpload: ({ validateFn, onUpload }: ImageUploadOptions) => UploadFn;
export declare const handleImagePaste: (view: EditorView, event: ClipboardEvent, uploadFn: UploadFn) => boolean;
export declare const handleImageDrop: (view: EditorView, event: DragEvent, moved: boolean, uploadFn: UploadFn) => boolean;
