import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
// import Modal from "../modal/Modal";

function Form({ onClose }) {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxLength = 500;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xhol6eh",
        "template_phksuhf",
        form.current,
        "6JumkaDVmvIAyMfRz"
      )
      .then(
        (result) => {
          console.log("Email envoyé:", result.text);
          if (onClose) onClose();
          setIsModalOpen(true);
        },
        (error) => {
          console.error("Erreur:", error.text);
          alert("Une erreur est survenue.");
        }
      );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendEmail(e);
    }
  };

  return (
    <div>
      <form
        ref={form}
        className="container-form"
        id="contact"
        onSubmit={sendEmail}
        onKeyDown={handleKeyDown}
      >
        <div className="input-wrapper">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="sujet">Sujet:</label>
          <input
            type="text"
            id="sujet"
            name="subject"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            maxLength={maxLength}
            required
          />
          <p>
            {message.length} / {maxLength} caractères
          </p>
        </div>
        <div className="btn-container">
          <button className="btn" type="submit">
            Envoyer
          </button>
          <button className="btn" type="button" onClick={onClose}>
            Fermer
          </button>
        </div>
      </form>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
}

export default Form;
