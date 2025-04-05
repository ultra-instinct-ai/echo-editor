import { DropdownMenuCheckboxItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: boolean) => void;
    select: (event: Event) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((payload: boolean) => any) | undefined;
    onSelect?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
