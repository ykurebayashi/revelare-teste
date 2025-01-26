import { CustomImage } from "./style";
import { ImageItemProps } from "./type";

export const ImageGalleryItem = ({
  src,
  alt,
  gridColumnEnd,
  gridColumnStart,
  gridRowEnd,
  gridRowStart,
  imageFit,
}: ImageItemProps) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      $gridColumnEnd={gridColumnEnd}
      $gridColumnStart={gridColumnStart}
      $gridRowEnd={gridRowEnd}
      $gridRowStart={gridRowStart}
      $imageFit={imageFit}
    />
  );
};
