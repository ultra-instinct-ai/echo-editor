import { Editor } from '@tiptap/vue-3';

interface Props {
    editor: Editor;
    disabled?: boolean;
    color?: string;
    maxHeight?: string | number;
    icon?: any;
    tooltip?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    items: () => never[];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    items: () => never[];
}>>> & Readonly<{}>, {
    icon: any;
    color: string;
    disabled: boolean;
    tooltip: string;
    maxHeight: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
