import { useTranslation } from "react-i18next";

const Connection = () => {
  const { t } = useTranslation();

  const text = [
    {
      id: "01",
      titleKey: "connection.item1.title",
      textKey: "connection.item1.text"
    },
    {
      id: "02",
      titleKey: "connection.item2.title",
      textKey: "connection.item2.text"
    },
    {
      id: "03",
      titleKey: "connection.item3.title",
      textKey: "connection.item3.text"
    },
    {
      id: "04",
      titleKey: "connection.item4.title",
      textKey: "connection.item4.text"
    },
    {
      id: "05",
      titleKey: "connection.item5.title",
      textKey: "connection.item5.text"
    },
    {
      id: "06",
      titleKey: "connection.item6.title",
      textKey: "connection.item6.text"
    }
  ];

  return (
    <div className="space-y-[120px] py-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          {t("connection.title")}
        </h1>
      </div>

      {/* text massivini ko'rsatish */}
      <div className="flex flex-wrap items-center justify-around gap-14">
        {text.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl bg-slate-100 p-5 w-[318px] py-5 space-y-4">
            <div className=" absolute -top-[40px] rounded-2xl font-medium text-[27px] text-center w-[54px] h-[54px] py-2 bg-[#62ACA7] text-white">
              <h1>{item.id}</h1>
            </div>
            <h2 className="text-xl font-semibold text-[#3E3E3E]">
              {t(item.titleKey)}
            </h2>
            <p className="mt-2 text-md text-[#3E3E3E]">{t(item.textKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connection;
