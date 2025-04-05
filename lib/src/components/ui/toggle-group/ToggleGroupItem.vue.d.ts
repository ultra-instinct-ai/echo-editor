import { VariantProps } from 'class-variance-authority';
import { toggleVariants } from '../toggle';
import { ToggleGroupItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';

type ToggleGroupVariants = VariantProps<typeof toggleVariants>;
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToggleGroupItemProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleGroupVariants["variant"];
    size?: ToggleGroupVariants["size"];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToggleGroupItemProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleGroupVariants["variant"];
    size?: ToggleGroupVariants["size"];
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
