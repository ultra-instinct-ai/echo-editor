import { ButtonViewReturnComponentProps } from '../../type';
import { StyleValue } from 'vue';

export interface Item {
    title: string;
    icon?: any;
    level?: number;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: StyleValue;
    shortcutKeys?: string[];
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
