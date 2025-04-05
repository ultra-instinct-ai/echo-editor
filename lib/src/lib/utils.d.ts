import { Ref } from 'vue';
import { ClassValue } from 'clsx';

type Updater<T> = any;
export declare function cn(...inputs: ClassValue[]): string;
export declare function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref): void;
export {};
