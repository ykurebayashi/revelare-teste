import styled from "styled-components";

export type ImageItemProps = {
  src: string;
  alt: string;
  gridRowStart: number;
  gridRowEnd: number;
  gridColumnStart: number;
  gridColumnEnd: number;
};
export const ImageGalleryItem = ({
  src,
  alt,
  gridColumnEnd,
  gridColumnStart,
  gridRowEnd,
  gridRowStart,
}: ImageItemProps) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      $gridColumnEnd={gridColumnEnd}
      $gridColumnStart={gridColumnStart}
      $gridRowEnd={gridRowEnd}
      $gridRowStart={gridRowStart}
    />
  );
};

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
