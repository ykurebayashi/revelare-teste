import styled from "styled-components";

export type ImageGalleryProps = {
  division: "half" | "third";
  children: React.ReactNode;
};

export const ImageGallery = ({ division, children }: ImageGalleryProps) => {
  return <MainGrid $division={division}>{children}</MainGrid>;
};

export const MainGrid = styled.div<{ $division: "half" | "third" }>`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => (props.$division === "half" ? "2, 50vh" : "3, 33.33vh")}
  );
  grid-template-columns: repeat(2, 50%);
`;
