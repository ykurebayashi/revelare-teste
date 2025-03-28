import { CSSProperties } from "react";
import styled from "styled-components";

type CustomImageType = {
  $gridRowStart: number;
  $gridRowEnd: number;
  $gridColumnStart: number;
  $gridColumnEnd: number;
  $imageFit?: CSSProperties["objectFit"];
};

export const CustomImage = styled.img<CustomImageType>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.$imageFit || "cover"};
  grid-row: ${(props) => `${props.$gridRowStart}/${props.$gridRowEnd}`};
  grid-column: ${(props) =>
    `${props.$gridColumnStart}/${props.$gridColumnEnd}`};
`;
