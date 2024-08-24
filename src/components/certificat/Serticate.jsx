import { useTranslation } from "react-i18next";
import Carousel from "./Carusel";
import LeftCarusel from "./LeftCarusel";

const Serticate = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-10 py-10" id="natija">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          {t("up_to")}
        </h1>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <LeftCarusel />
      </div>
    </div>
  );
};

export default Serticate;
