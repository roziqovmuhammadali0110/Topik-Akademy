import { useTranslation } from "next-i18next";

const Topik = () => {
  const { t } = useTranslation();

  const items = [
    {
      imgSrc:
        "https://optim.tildacdn.pub/tild3033-3431-4064-b932-303136643166/-/resize/208x/-/format/webp/chat-bubble-dynamic-.png",
      textKey: "short_time_learning"
    },
    {
      imgSrc:
        "https://optim.tildacdn.pub/tild6632-6431-4934-b331-303635396136/-/resize/208x/-/format/webp/rocket-dynamic-color.png",
      textKey: "career_building"
    },
    {
      imgSrc:
        "https://optim.tildacdn.pub/tild3235-3432-4161-b462-393034366464/-/resize/208x/-/format/webp/money-dynamic-color.png",
      textKey: "grant_scholarship"
    },
    {
      imgSrc:
        "https://optim.tildacdn.pub/tild3538-3161-4462-a262-383739333632/-/resize/208x/-/format/webp/travel-dynamic-color.png",
      textKey: "study_work_abroad"
    },
    {
      imgSrc:
        "https://optim.tildacdn.pub/tild3237-3439-4337-b730-386164336537/-/resize/208x/-/format/webp/target-dynamic-color.png",
      textKey: "improve_skills"
    },
    {
      imgSrc:
        "https://optim.tildacdn.pub/tild6237-3166-4931-b163-626534626161/-/resize/208x/-/format/webp/key-dynamic-color.png",
      textKey: "struggle_results"
    }
  ];

  return (
    <div className="space-y-10" id="topik">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center">
          {t("topik_title")}
        </h1>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 xs:grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4">
            <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-full flex items-center justify-center">
              <img
                src={item.imgSrc}
                alt={t(item.textKey)}
                className="w-[80%] h-[80%] object-cover"
              />
            </div>
            <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
              <p>{t(item.textKey)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-[322px] xs:w-[240px] md:w-[330px] xs:h-[50px] md:h-[78px] h-[78px] bg-[#63B1AE] rounded-[60px] font-medium text-white xs:text-[16px] md:text-[24px] text-[24px]">
          <a href="#">{t("cta_text")}</a>
        </button>
      </div>
    </div>
  );
};

export default Topik;
