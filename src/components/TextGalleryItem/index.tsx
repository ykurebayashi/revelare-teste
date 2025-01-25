import styled from "styled-components";

export type TextItemProps = {
  title: string;
  subTitle?: string;
  buttonText?: string;
  buttonClick?: () => void;
  gridRowStart: number;
  gridRowEnd: number;
  gridColumnStart: number;
  gridColumnEnd: number;
};

export const TextGalleryItem = ({
  title,
  subTitle,
  buttonText,
  buttonClick,
  gridColumnEnd,
  gridColumnStart,
  gridRowEnd,
  gridRowStart,
}: TextItemProps) => {
  return (
    <CustomContainer
      $gridColumnEnd={gridColumnEnd}
      $gridColumnStart={gridColumnStart}
      $gridRowEnd={gridRowEnd}
      $gridRowStart={gridRowStart}
    >
      <p>{title}</p>
      <p>{subTitle}</p>
      <button onClick={buttonClick}>{buttonText}</button>
    </CustomContainer>
  );
};

export const CustomContainer = styled.div<{
  $gridRowStart: number;
  $gridRowEnd: number;
  $gridColumnStart: number;
  $gridColumnEnd: number;
}>`
  width: 100%;
  height: 100%;
  grid-row: ${(props) => `${props.$gridRowStart}/${props.$gridRowEnd}`};
  grid-column: ${(props) =>
    `${props.$gridColumnStart}/${props.$gridColumnEnd}`};
`;
