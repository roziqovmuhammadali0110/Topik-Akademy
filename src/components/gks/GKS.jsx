import { useTranslation } from "react-i18next";

const Gks = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-10 pb-10">
      <div className="w-full flex items-center justify-center">
        <h1 className="max-w-[810px] text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-[55px] xs:leading-6 md:leading-10 xl:leading-[55px] text-center">
          {t("gks.title")}
        </h1>
      </div>
      <div className="w-full flex items-start justify-between gap-9 xs:flex-col xl:flex-row">
        <div className="w-[50%] xs:w-full xl:w-[50%]">
          <img
            src="https://optim.tildacdn.pub/tild3536-3566-4230-b761-306332316332/-/format/webp/Group_102.png"
            alt={t("gks.imageAlt")}
            className="w-full h-full"
          />
        </div>
        <div className="w-[50%] xs:w-full xl:w-[50%] space-y-20">
          <div className="space-y-6">
            <h2 className="text-[30px] xs:text-[20px] md:text-[22px] 2xl:text-[30px] text-[#000000] font-medium">
              {t("gks.subtitle")}
              <span className="text-[#ABDDB1]">{t("gks.grantAmount")}</span>
            </h2>
            <p className="text-[20px] xs:text-[13px] md:text-[15px] 2xl:text-[20px] text-[#000000]">
              {t("gks.descriptionPart1")}
              <span className="text-[#73C0BD]">{t("gks.foreign")}</span>
              {t("gks.descriptionPart2")}
              <span className="text-[#73C0BD]">{t("gks.fullGrant")}</span>
              {t("gks.descriptionPart3")}
              <span className="text-[#73C0BD]">{t("gks.stipend")}</span>
              {t("gks.descriptionPart4")}
            </p>
          </div>
          <div className="xs:hidden 2xl:flex">
            <div className="space-y-8">
              <h2 className="text-[32px] xs:text-[20px] md:text-[25px] 2xl:text-[32px] text-[#000000] font-medium">
                {t("gks.benefitsTitle")}
              </h2>
              <ul className="list-disc pl-5 text-[20px] xs:text-[13px] md:text-[15px] 2xl:text-[20px] text-[#000000]">
                <li>{t("gks.benefit1")}</li>
                <li>{t("gks.benefit2")}</li>
                <li>{t("gks.benefit3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:flex 2xl:hidden">
        <div className="space-y-8">
          <h2 className="text-[32px] xs:text-[20px] md:text-[25px] 2xl:text-[32px] text-[#000000] font-medium">
            {t("gks.benefitsTitle")}
          </h2>
          <ul className="list-disc pl-5 text-[20px] xs:text-[13px] md:text-[15px] 2xl:text-[20px] text-[#000000]">
            <li>{t("gks.benefit1")}</li>
            <li>{t("gks.benefit2")}</li>
            <li>{t("gks.benefit3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gks;
