import { OrderedListOptions as TiptapOrderedListOptions } from '@tiptap/extension-ordered-list';
import { GeneralOptions } from '../../type';

export interface OrderedListOptions extends TiptapOrderedListOptions, GeneralOptions<OrderedListOptions> {
}
export declare const OrderedList: import('@tiptap/core').Node<OrderedListOptions, any>;
