import { CSSProperties } from "react";

export type ImageItemProps = {
  src: string;
  alt: string;
  gridRowStart: number;
  gridRowEnd: number;
  gridColumnStart: number;
  gridColumnEnd: number;
  imageFit?: CSSProperties["objectFit"];
};
