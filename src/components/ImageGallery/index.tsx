import { MainGrid } from "./style";
import { ImageGalleryProps } from "./type";

export const ImageGallery = ({
  division,
  children,
  backgroundColor,
  columns,
  isMobile,
  id,
}: ImageGalleryProps) => {
  return (
    <MainGrid
      $division={division}
      $backgroundColor={backgroundColor}
      $columns={columns}
      $isMobile={isMobile}
      id={id}
    >
      {children}
    </MainGrid>
  );
};
