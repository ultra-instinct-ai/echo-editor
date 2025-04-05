import { AnyExtension, JSONContent } from '@tiptap/core';
import { Editor } from '@tiptap/vue-3';
import { EchoEditorOnChange, EchoEditorProps } from '../type';

declare function __VLS_template(): {
    footer?(_: {
        editor: Editor;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<EchoEditorProps>, {
    modelValue: string;
    output: string;
    dark: undefined;
    disabled: boolean;
    hideToolbar: boolean;
    hideMenubar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    maxWidth: undefined;
    minHeight: undefined;
    maxHeight: undefined;
    extensions: () => never[];
    editorClass: undefined;
    contentClass: undefined;
}>>, {
    editor: Editor;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    enter: () => void;
    change: (value: EchoEditorOnChange) => void;
    "update:modelValue": (value: string | JSONContent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<EchoEditorProps>, {
    modelValue: string;
    output: string;
    dark: undefined;
    disabled: boolean;
    hideToolbar: boolean;
    hideMenubar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    maxWidth: undefined;
    minHeight: undefined;
    maxHeight: undefined;
    extensions: () => never[];
    editorClass: undefined;
    contentClass: undefined;
}>>> & Readonly<{
    onEnter?: (() => any) | undefined;
    onChange?: ((value: EchoEditorOnChange) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | JSONContent) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string | JSONContent;
    output: "html" | "json" | "text";
    extensions: AnyExtension[];
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    dark: boolean;
    hideToolbar: boolean;
    hideMenubar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    editorClass: string | string[] | Record<string, any>;
    contentClass: string | string[] | Record<string, any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
