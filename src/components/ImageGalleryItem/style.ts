import styled from "styled-components";

export const CustomImage = styled.img<{
    $gridRowStart: number;
    $gridRowEnd: number;
    $gridColumnStart: number;
    $gridColumnEnd: number;
  }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row: ${(props) => `${props.$gridRowStart}/${props.$gridRowEnd}`};
    grid-column: ${(props) =>
      `${props.$gridColumnStart}/${props.$gridColumnEnd}`};
`;
  