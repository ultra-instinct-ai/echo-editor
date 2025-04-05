import { icons } from '../../components/icons';

interface ServiceType {
    label: string;
    value: string;
    icon: keyof typeof icons;
}
export declare const VideoServices: ServiceType[];
export declare const MapServices: ServiceType[];
export declare const DesignServices: ServiceType[];
export declare const DevelopServices: ServiceType[];
export declare const DataServices: ServiceType[];
export declare const OtherServices: never[];
export declare const AllEmbedServices: ServiceType[];
export declare const getEmbedService: (value: any) => {};
/**
 * Embed service link
 * @id source id
 * @exmplae example link
 * @src source src, used in iframe
 */
export declare const EmbedServiceLink: {
    youtube: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    youku: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
        idRule: string;
    };
    bilibili: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    qqvideo: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    amap: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    baidu_map: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    modao: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
        tips: string;
    };
    lanhu: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
        tips: string;
    };
    figma: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    canva: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    processon: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    codepen: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    jinshuju: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
    iframe: {
        example: string;
        src: string;
        srcPrefix: string;
        linkRule: string[];
    };
};
interface EmbedResult {
    validLink: boolean;
    validId: boolean;
    matchedUrl: string;
    originalLink: string;
    src: string;
}
export declare function getExampleUrl(service: string): string;
export declare const getServiceSrc: (service: string, originalLink: string) => EmbedResult;
export {};
