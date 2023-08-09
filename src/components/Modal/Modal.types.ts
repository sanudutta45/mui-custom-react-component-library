export interface ModalProps {
  /** open or close modal */
  open: boolean
  onClose?: () => void
  children: JSX.Element
}
