import { TooltipContentProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TooltipContentProps & {
    class?: HTMLAttributes["class"];
}>, {
    sideOffset: number;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: Event) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TooltipContentProps & {
    class?: HTMLAttributes["class"];
}>, {
    sideOffset: number;
}>>> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: Event) => any) | undefined;
}>, {
    sideOffset: number;
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
