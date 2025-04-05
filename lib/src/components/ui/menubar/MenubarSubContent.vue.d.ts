import { MenubarSubContentProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MenubarSubContentProps & {
    class?: HTMLAttributes["class"];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => void;
    focusOutside: (event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => void;
    interactOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => void;
    openAutoFocus: (event: Event) => void;
    closeAutoFocus: (event: Event) => void;
    entryFocus: (event: Event) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MenubarSubContentProps & {
    class?: HTMLAttributes["class"];
}>>> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any) | undefined;
    onFocusOutside?: ((event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onInteractOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onEntryFocus?: ((event: Event) => any) | undefined;
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
