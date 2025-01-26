import { ImageItemProps } from "../../components/ImageGalleryItem/type";
import { TextItemProps } from "../../components/TextGalleryItem/type";


export type GalleryItem =
  | (ImageItemProps & { component: React.ComponentType<ImageItemProps> })
  | (TextItemProps & { component: React.ComponentType<TextItemProps> });