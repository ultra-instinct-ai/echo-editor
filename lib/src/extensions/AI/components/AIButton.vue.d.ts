import { ButtonViewReturnComponentProps } from '../../../type';
import { TooltipContentProps } from 'reka-ui';
import { icons } from '../../../components/icons';
import { Editor } from '@tiptap/vue-3';

interface Props {
    editor: Editor;
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
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
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
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
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
