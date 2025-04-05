import { Node } from '@tiptap/vue-3';

export interface VideoOptions {
    upload?: (files: File[]) => void;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        videoUpload: {
            setVideoUpload: () => ReturnType;
        };
    }
}
export declare const VideoUpload: Node<VideoOptions, any>;
export default VideoUpload;
