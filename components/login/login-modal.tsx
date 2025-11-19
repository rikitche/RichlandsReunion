import Modal from "../modal";
import { LoginForm } from "./login-form";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <LoginForm onSubmit={handleClose} />
    </Modal>
  );
}
