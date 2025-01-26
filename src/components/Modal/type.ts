export 
type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
};