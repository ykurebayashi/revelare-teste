export type ImageGalleryProps = {
  division: "half" | "third";
  children: React.ReactNode;
  backgroundColor?: string;
  columns?: number;
  isMobile?: boolean;
  id?: string;
};
