import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../modal/Modal";

const Register = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="space-y-20" id="kurs">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center">
          {t("register.title")}
        </h1>
      </div>
      <div className="flex-wrap flex items-center justify-around space-y-3">
        {/* Intensive Course Box */}
        <div className="w-[350px] h-[410px] rounded-[45px] bg-[#F7F7F7] p-3">
          <div className="w-full">
            <img
              src="https://optim.tildacdn.pub/tild3464-3039-4433-b832-663664336461/-/resize/854x/-/format/webp/course1.png"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-[28px] font-medium text-[#4B4B4B]">
                {t("register.courses.intensive.title")}
              </h4>
              <p className="w-36 text-white text-[14px] p-2 text-center font-medium rounded-3xl bg-[#61ABA7]">
                {t("register.courses.intensive.duration")}
              </p>
            </div>
            <p className="text-[#444444] w-[70%] text-[14px] font-medium">
              {t("register.courses.intensive.description")}
            </p>
            <div className="w-full flex items-center justify-between">
              <button
                onClick={openModal}
                className="w-44 text-white text-[12px] p-3 shadow-lg text-center font-medium rounded-3xl bg-[#61ABA7]">
                {t("register.courses.intensive.button")}
              </button>
              <h4 className="text-[17px] font-medium text-[#6BAAA8]">
                {t("register.courses.intensive.price")}
              </h4>
            </div>
          </div>
        </div>

        {/* Standard Course Box */}
        <div className="w-[350px] h-[410px] rounded-[45px] bg-[#F7F7F7] p-3">
          <div className="w-full">
            <img
              src="https://optim.tildacdn.pub/tild6262-3437-4233-b834-613939346431/-/resize/854x/-/format/webp/course2.png"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-[28px] font-medium text-[#4B4B4B]">
                {t("register.courses.standard.title")}
              </h4>
              <p className="w-36 text-white text-[14px] p-2 text-center font-medium rounded-3xl bg-[#61ABA7]">
                {t("register.courses.standard.duration")}
              </p>
            </div>
            <p className="text-[#444444] w-[50%] text-[14px] font-medium">
              {t("register.courses.standard.description")}
            </p>
            <div className="w-full flex items-center justify-between">
              <button
                onClick={openModal}
                className="w-44 text-white text-[12px] p-3 shadow-lg text-center font-medium rounded-3xl bg-[#61ABA7]">
                {t("register.courses.standard.button")}
              </button>
              <h4 className="text-[17px] font-medium text-[#6BAAA8]">
                {t("register.courses.standard.price")}
              </h4>
            </div>
          </div>
        </div>

        {/* Individual Course Box */}
        <div className="w-[350px] h-[410px] rounded-[45px] bg-[#F7F7F7] p-3">
          <div className="w-full">
            <img
              src="https://optim.tildacdn.pub/tild6438-3938-4330-a465-613833356366/-/resize/854x/-/format/webp/course3.png"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-[28px] font-medium text-[#4B4B4B]">
                {t("register.courses.individual.title")}
              </h4>
              <p className="w-36 text-white text-[14px] p-2 text-center font-medium rounded-3xl bg-[#61ABA7]">
                {t("register.courses.individual.duration")}
              </p>
            </div>
            <p className="text-[#444444] w-[50%] text-[14px] font-medium">
              {t("register.courses.individual.description")}
            </p>
            <div className="w-full flex items-center justify-between">
              <button
                onClick={openModal}
                className="w-44 text-white text-[12px] p-3 shadow-lg text-center font-medium rounded-3xl bg-[#61ABA7]">
                {t("register.courses.individual.button")}
              </button>
              <h4 className="text-[17px] font-medium text-[#6BAAA8]">
                {t("register.courses.individual.price")}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Register;
