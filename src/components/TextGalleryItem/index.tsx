import {
  CustomContainer,
  Button,
  Description,
  MainContent,
  Title,
} from "./style";
import { TextItemProps } from "./type";

export const TextGalleryItem = ({
  title,
  subTitle,
  buttonText,
  buttonClick,
  gridColumnEnd,
  gridColumnStart,
  gridRowEnd,
  gridRowStart,
}: TextItemProps) => {
  return (
    <CustomContainer
      $gridColumnEnd={gridColumnEnd}
      $gridColumnStart={gridColumnStart}
      $gridRowEnd={gridRowEnd}
      $gridRowStart={gridRowStart}
    >
      <MainContent>
        <Title>{title}</Title>
        <Description>{subTitle}</Description>
        <Button onClick={buttonClick}>{buttonText}</Button>
      </MainContent>
    </CustomContainer>
  );
};
