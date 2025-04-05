import { Node } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export interface CodeBlockOptions extends GeneralOptions<CodeBlockOptions> {
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        setCodeBlock: {
            setCodeBlock: (options?: any) => ReturnType;
        };
    }
}
/**
 * Matches a code block with backticks.
 */
export declare const backtickInputRegex: RegExp;
/**
 * Matches a code block with tildes.
 */
export declare const tildeInputRegex: RegExp;
export declare const CodeBlock: Node<any, any>;
