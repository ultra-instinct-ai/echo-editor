export interface GridSize {
    rows: number;
    cols: number;
}
export interface CreateTablePayload extends GridSize {
    withHeaderRow: boolean;
}
declare function __VLS_template(): {
    trigger?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
    disabled: {
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "create-table": (payload: CreateTablePayload) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
    disabled: {
        default: boolean;
    };
}>> & Readonly<{
    "onCreate-table"?: ((payload: CreateTablePayload) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
