import Carousel from "./Carusel";
import LeftCarusel from "./LeftCarusel";

const Serticate = () => {
  return (
    <div className="space-y-10 py-10" id="natija">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          O’quvchilarimizning natijalari TOPIK 6 gacha
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
