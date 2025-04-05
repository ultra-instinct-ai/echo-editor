import { VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';
export declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "outline" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "icon" | "default" | "sm" | "lg" | "xs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
