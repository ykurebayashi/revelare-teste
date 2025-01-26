import { StyledDialog, CloseButton, MainContent } from "./style";
import { ModalProps } from "./type";

export const Modal = ({ children, onClose, height, width }: ModalProps) => {
  return (
    <StyledDialog>
      <MainContent $height={height} $width={width}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </MainContent>
    </StyledDialog>
  );
};
