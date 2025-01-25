import { MainGrid } from "./style";
import { ImageGalleryProps } from "./type";

export const ImageGallery = ({ division, children }: ImageGalleryProps) => {
  return <MainGrid $division={division}>{children}</MainGrid>;
};
