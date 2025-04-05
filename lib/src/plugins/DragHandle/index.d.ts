import { PluginKey, Plugin } from '@tiptap/pm/state';
import { Editor } from '@tiptap/core';
import { Node } from '@tiptap/pm/model';
import { Props as TippyProps } from 'tippy.js';

declare const dragHandlePluginDefaultKey: PluginKey<any>;
declare const DragHandlePlugin: ({ pluginKey: customPluginKey, element: dragHandleElement, editor, tippyOptions, onNodeChange, }: {
    pluginKey?: PluginKey | string;
    element: HTMLElement;
    editor: Editor;
    tippyOptions?: Partial<TippyProps>;
    onNodeChange?: (data: {
        editor: Editor;
        node: Node | null;
        pos: number;
    }) => void;
}) => Plugin<{
    locked: boolean;
}>;
export { DragHandlePlugin, dragHandlePluginDefaultKey };
