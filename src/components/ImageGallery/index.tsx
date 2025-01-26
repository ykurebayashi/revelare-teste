import { MainGrid } from "./style";
import { ImageGalleryProps } from "./type";

export const ImageGallery = ({
  division,
  children,
  backgroundColor,
  columns,
  isMobile,
}: ImageGalleryProps) => {
  return (
    <MainGrid
      $division={division}
      $backgroundColor={backgroundColor}
      $columns={columns}
      $isMobile={isMobile}
    >
      {children}
    </MainGrid>
  );
};
