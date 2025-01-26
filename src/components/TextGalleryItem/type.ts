export type TextItemProps = {
    title: string;
    subTitle?: string;
    buttonText?: string;
    buttonClick?: () => void;
    gridRowStart?: number;
    gridRowEnd?: number;
    gridColumnStart?: number;
    gridColumnEnd?: number;
    background?: string ;
};