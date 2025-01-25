import { ImageItemProps } from "../../components/ImageGalleryItem";
import { TextItemProps } from "../../components/TextGalleryItem";

export type GalleryItem =
  | (ImageItemProps & { component: React.ComponentType<ImageItemProps> })
  | (TextItemProps & { component: React.ComponentType<TextItemProps> });