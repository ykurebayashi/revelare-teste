import { useEffect, useRef } from "react";
import { StyledDialog, CloseButton } from "./style";
import { ModalProps } from "./type";

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <StyledDialog ref={modalRef}>
      <CloseButton className="modal-close-btn" onClick={onClose}>
        Close
      </CloseButton>
      {children}
    </StyledDialog>
  );
};
