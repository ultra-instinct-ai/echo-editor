import { ToastProps } from '.';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToastProps>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
    escapeKeyDown: (event: KeyboardEvent) => void;
    pause: () => void;
    resume: () => void;
    swipeStart: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => void;
    swipeMove: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => void;
    swipeCancel: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => void;
    swipeEnd: (event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToastProps>>> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPause?: (() => any) | undefined;
    onResume?: (() => any) | undefined;
    onSwipeStart?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
    onSwipeMove?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
    onSwipeCancel?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
    onSwipeEnd?: ((event: {
        currentTarget: EventTarget & HTMLElement;
    } & Omit<CustomEvent<{
        originalEvent: PointerEvent;
        delta: {
            x: number;
            y: number;
        };
    }>, "currentTarget">) => any) | undefined;
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
