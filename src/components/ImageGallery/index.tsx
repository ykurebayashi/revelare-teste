import { MainGrid } from "./style";
import { ImageGalleryProps } from "./type";

export const ImageGallery = ({
  division,
  children,
  backgroundColor,
  columns,
}: ImageGalleryProps) => {
  return (
    <MainGrid
      $division={division}
      $backgroundColor={backgroundColor}
      $columns={columns}
    >
      {children}
    </MainGrid>
  );
};
