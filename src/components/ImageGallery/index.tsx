import { MainGrid } from "./style";
import { ImageGalleryProps } from "./type";

export const ImageGallery = ({
  division,
  children,
  backgroundColor,
}: ImageGalleryProps) => {
  return (
    <MainGrid $division={division} $backgroundColor={backgroundColor}>
      {children}
    </MainGrid>
  );
};
