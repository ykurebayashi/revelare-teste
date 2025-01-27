import { useState } from "react";
import {
  CustomContainer,
  Button,
  Description,
  MainContent,
  Title,
} from "./style";
import { TextItemProps } from "./type";
import { Modal } from "../Modal";
import { useCheckMobile } from "../../utils/useCheckMobile";

export const TextGalleryItem = ({
  title,
  subTitle,
  buttonText,
  buttonClick,
  gridColumnEnd,
  gridColumnStart,
  gridRowEnd,
  gridRowStart,
  background,
  modalTitle,
  modalDescription,
}: TextItemProps) => {
  const [modalInfo, setModalInfo] = useState<boolean>(false);
  const { isMobile } = useCheckMobile();

  return (
    <CustomContainer
      $gridColumnEnd={gridColumnEnd}
      $gridColumnStart={gridColumnStart}
      $gridRowEnd={gridRowEnd}
      $gridRowStart={gridRowStart}
      $background={background}
    >
      <MainContent>
        <Title>{title}</Title>
        <Description>{subTitle}</Description>
        <Button
          aria-haspopup="true"
          onClick={() => {
            if (buttonClick) buttonClick();
            setModalInfo(true);
          }}
        >
          {buttonText}
        </Button>
      </MainContent>

      {!!modalInfo && (
        <Modal
          onClose={() => {
            setModalInfo(false);
          }}
          width={isMobile ? "90%" : "50%"}
          height={isMobile ? "70vh" : "50vh"}
        >
          <TextGalleryItem
            title={modalTitle ?? "Lorem Ipsum Dolor"}
            subTitle={
              modalDescription ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget odio non arcu feugiat imperdiet nec sed leo. Sed lectus mauris, fringilla sit amet accumsan at, pellentesque vitae ipsum. Nullam"
            }
            buttonClick={() => setModalInfo(false)}
            buttonText="Fechar"
          />
        </Modal>
      )}
    </CustomContainer>
  );
};
