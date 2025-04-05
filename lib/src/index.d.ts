import { Plugin } from 'vue';
import { default as EchoEditor } from './components/EchoEditor.vue';
import { default as ActionButton } from './components/ActionButton.vue';
import { default as locale, zhHans, en } from './locales';

declare const EchoEditorPlugin: Plugin;
export { en, locale, zhHans };
export * from './extensions';
export { useEditor } from '@tiptap/vue-3';
export type * from './type';
export { type Editor as EditorInstance, type JSONContent } from '@tiptap/core';
export type { EchoEditorProps, EchoEditorEmits } from './type';
export { EchoEditorPlugin, EchoEditor, ActionButton };
export default EchoEditorPlugin;
