import { Editor } from '@tiptap/core';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    completion: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    generate: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    completion: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onGenerate?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
