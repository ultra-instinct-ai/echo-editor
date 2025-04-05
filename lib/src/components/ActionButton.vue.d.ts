import { ButtonViewReturnComponentProps } from '../type';
import { TooltipContentProps } from 'reka-ui';
import { icons } from './icons';
import { Editor } from '@tiptap/core';
import { HTMLAttributes } from 'vue';

interface Props {
    icon?: keyof typeof icons;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    customClass?: string;
    loading?: boolean;
    tooltipOptions?: TooltipContentProps;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    editor?: Editor;
    class?: HTMLAttributes['class'];
}
declare function __VLS_template(): {
    icon?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: undefined;
    title: undefined;
    tooltip: undefined;
    disabled: boolean;
    customClass: string;
    color: undefined;
    loading: boolean;
    shortcutKeys: undefined;
    tooltipOptions: undefined;
    action: undefined;
    isActive: undefined;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: undefined;
    title: undefined;
    tooltip: undefined;
    disabled: boolean;
    customClass: string;
    color: undefined;
    loading: boolean;
    shortcutKeys: undefined;
    tooltipOptions: undefined;
    action: undefined;
    isActive: undefined;
}>>> & Readonly<{}>, {
    icon: keyof typeof icons;
    color: string;
    disabled: boolean;
    action: (value?: any) => void;
    isActive: () => boolean;
    tooltip: string;
    title: string;
    shortcutKeys: string[];
    customClass: string;
    loading: boolean;
    tooltipOptions: TooltipContentProps;
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
