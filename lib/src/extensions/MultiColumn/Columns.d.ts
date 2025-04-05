import { Node } from '@tiptap/core';
import { GeneralOptions } from '../../type';

export declare enum ColumnLayout {
    SidebarLeft = "sidebar-left",
    SidebarRight = "sidebar-right",
    TwoColumn = "two-column"
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        columns: {
            setColumns: () => ReturnType;
            setLayout: (layout: ColumnLayout) => ReturnType;
        };
    }
}
export interface ColumnsOptions extends GeneralOptions<ColumnsOptions> {
    columnOptions: any;
    layout: ColumnLayout;
}
export declare const Columns: Node<ColumnsOptions, any>;
export default Columns;
