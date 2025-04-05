import { Editor } from '@tiptap/core';

export interface UseEditorFocusOptions {
    editor: Editor | null;
    /**
     * 更新聚焦状态的防抖等待时间（毫秒）
     * @default 250
     */
    wait?: number;
}
/**
 * 处理编辑器聚焦状态的 Hook
 * 用于防止在操作工具栏等界面元素时出现边框闪烁的问题
 */
export declare function useEditorFocus({ editor, wait }: UseEditorFocusOptions): {
    isFocused: import('vue').Ref<boolean, boolean>;
};
