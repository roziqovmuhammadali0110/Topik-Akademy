import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import axios from "axios";

const Register2 = () => {
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
      setTimeout(() => setError(""), 3000); // 3 sekunddan keyin xatolik xabarini o'chirish
      return;
    }

    const phonePattern = /^\+998\d{9}$/; // O'zbekiston telefon raqami formati
    if (!phonePattern.test(call)) {
      setError("Iltimos, to'g'ri telefon raqamini kiriting.");
      setTimeout(() => setError(""), 3000); // 3 sekunddan keyin xatolik xabarini o'chirish
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
      setTimeout(() => setNotification(""), 3000); // 3 sekunddan keyin xabarni o'chirish
    }
  };

  return (
    <div
      className="w-full py-5 flex items-center justify-center"
      id="register2">
      <div className="w-[80%] xs:w-[100%] xl:w-[90%] 2xl:w-[80%] xs:py-4 lg:py-0 lg:h-[320px] rounded-2xl bg-[#D0ECE9] flex xs:flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[50%] items-center justify-center flex flex-col space-y-7 p-5 text-center lg:text-left">
          <h1 className="text-[40px] xs:text-[30px] md:text-[35px] lg:text-[40px] font-medium w-full lg:w-[300px]">
            {t("register2.title")}
          </h1>
          <p className="text-[20px] xs:text-[15px] md:text-[17px] lg:text-[20px] w-full lg:w-[300px]">
            {t("register2.description")}
          </p>
        </div>
        <div className="w-[50%] flex items-center justify-center p-5">
          <form
            id="myForm"
            onSubmit={SendMessage}
            className="flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              id="name"
              ref={nameRef}
              placeholder={t("register2.form.namePlaceholder")}
              className="w-[350px] xs:w-[250px] md:w-[330px] px-5 lg:w-[350px] p-[13px] border border-slate-900 bg-[#BFF1C5] rounded-3xl"
            />
            <input
              type="tel"
              id="call"
              ref={callRef}
              pattern="\+998\d{9}"
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Iltimos, faqat telefon raqamini kiriting"
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
              placeholder={t("register2.form.phonePlaceholder")}
              className="w-[350px] xs:w-[250px] md:w-[330px] px-5 lg:w-[350px] p-[13px] border border-slate-900 bg-[#BFF1C5] rounded-3xl"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-[350px] xs:w-[250px] md:w-[330px] lg:w-[350px] p-[15px] font-bold text-white bg-[#68B5B2] rounded-3xl">
              {loading ? "Loading..." : t("register2.form.button")}
            </button>
            {notification && <p>{notification}</p>}
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register2;
