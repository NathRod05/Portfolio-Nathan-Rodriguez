import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import { useTranslation } from "react-i18next";

function Form({ onClose }) {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState("");
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
        },
        (error) => {
          console.error("Erreur:", error.text);
          alert("Une erreur est survenue.");
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        className="container-form"
        id="contact"
        onSubmit={sendEmail}
      >
        <div className="input-wrapper">
          <label htmlFor="name">{t("name")}:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="sujet">{t("subject")}:</label>
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
            {t("send")}
          </button>
          <button className="btn" type="button" onClick={onClose}>
            {t("close")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
