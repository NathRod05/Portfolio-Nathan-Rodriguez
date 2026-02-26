import "./modal.css";
import { useTranslation } from "react-i18next";

function Modal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-containerr">
      <p>{t("message-successful")}</p>
      <button onClick={onClose}>OK</button>
    </div>
  );
}

export default Modal;
