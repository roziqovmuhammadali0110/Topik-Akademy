import { useState, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const callRef = useRef(null);

  const SendMessage = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const call = callRef.current.value;

    if (!name || !call) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const phonePattern = /^\+998\d{9}$/;
    if (!phonePattern.test(call)) {
      setError("Iltimos, to'g'ri telefon raqamini kiriting.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);
    const token = "7344232747:AAEjaU6XXZ9YPTfze-rKtNg2X1oBCD2JdQ0";
    const chat_id = 7015507246;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContext = `Ismi: ${name}\nTelefon raqami: ${call}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: messageContext
      });
      setNotification("Muvaffaqiyatli yuborildi");
      nameRef.current.value = "";
      callRef.current.value = "";
    } catch (error) {
      setNotification("Yuborishdagi xatolik");
    } finally {
      setLoading(false);
      setTimeout(() => setNotification(""), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] md:w-[60%] lg:w-[40%]">
        <div className="flex items-center justify-center flex-col text-center ">
          <p className="text-2xl font-bold mb-4 max-w-[600px]">
            {t("modal_text")}
          </p>
        </div>
        <form onSubmit={SendMessage} className="flex flex-col space-y-4">
          <input
            type="text"
            ref={nameRef}
            placeholder={t("register2.form.namePlaceholder")}
            className="p-3 border border-gray-300 rounded-xl"
          />
          <input
            type="tel"
            ref={callRef}
            pattern="\+998\d{9}"
            placeholder={t("register2.form.phonePlaceholder")}
            className="p-3 border border-gray-300 rounded-xl"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Iltimos, faqat telefon raqamini kiriting"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-3 rounded-xl">
            {loading ? "Loading..." : t("button_text")}
          </button>
          {notification && <p>{notification}</p>}
          {error && <p>{error}</p>}
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white w-[120px] h-[40px] rounded-xl">
          {t("closeButton")}
        </button>
      </div>
    </div>
  );
};

export default Modal;
