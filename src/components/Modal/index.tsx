import { StyledDialog, CloseButton } from "./style";
import { ModalProps } from "./type";

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <StyledDialog open={isOpen}>
      <CloseButton className="modal-close-btn" onClick={onClose}>
        Close
      </CloseButton>
      {children}
    </StyledDialog>
  );
};
