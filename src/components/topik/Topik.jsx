const Topik = () => {
  return (
    <div className=" space-y-10" id="topik">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          TOPIK academy aniq siz uchun agar siz:
        </h1>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 xs:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-[50%]">
            <img
              src="https://optim.tildacdn.pub/tild3033-3431-4064-b932-303136643166/-/resize/208x/-/format/webp/chat-bubble-dynamic-.png"
              alt=""
            />
          </div>
          <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
            <p>
              <span className="text-[#66B0AD]">Qisqa</span> muddat ichida Koreys
              tilida gapirishni istaysiz
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-[50%]">
            <img
              src="https://optim.tildacdn.pub/tild6632-6431-4934-b331-303635396136/-/resize/208x/-/format/webp/rocket-dynamic-color.png"
              alt=""
            />
          </div>
          <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
            <p>
              Koreys tili o’rganib o’z{" "}
              <span className="text-[#66B0AD]">karyerangizni</span> qurmoqchisiz
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-[50%]">
            <img
              src="https://optim.tildacdn.pub/tild3235-3432-4161-b462-393034366464/-/resize/208x/-/format/webp/money-dynamic-color.png"
              alt=""
            />
          </div>
          <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
            <p>
              Topik sertifikatini olib Koreyaning nufuzli universitetlariga{" "}
              <span className="text-[#66B0AD]">GRANT</span> yutmoqchisiz
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-[50%]">
            <img
              src="https://optim.tildacdn.pub/tild3538-3161-4462-a262-383739333632/-/resize/208x/-/format/webp/travel-dynamic-color.png"
              alt=""
            />
          </div>
          <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
            <p>
              Janubiy Koreya davlatida{" "}
              <span className="text-[#66B0AD]">o’qish</span> va{" "}
              <span className="text-[#66B0AD]">ishlash</span> uchun ketmoqchisiz
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-[50%]">
            <img
              src="https://optim.tildacdn.pub/tild3237-3439-4337-b730-386164336537/-/resize/208x/-/format/webp/target-dynamic-color.png"
              alt=""
            />
          </div>
          <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
            <p>
              Koreys tilini o’rta darajda bilasiz va darajangizni{" "}
              <span className="text-[#66B0AD]">oshirmoqchisiz</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[163px] h-[163px] bg-[#D9F6DD] rounded-[50%]">
            <img
              src="https://optim.tildacdn.pub/tild6237-3166-4931-b163-626534626161/-/resize/208x/-/format/webp/key-dynamic-color.png"
              alt=""
            />
          </div>
          <div className="max-w-[310px] text-[24px] xs:text-[16px] md:text-[18px] xl:text-[24px] font-normal text-center leading-7">
            <p>
              Ko’p yillardan buyon o’qib ham{" "}
              <span className="text-[#66B0AD]">natijaga</span> chiqa olmayapsiz
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-[322px] xs:w-[240px] md:w-[330px] xs:h-[50px] md:h-[78px] h-[78px] bg-[#63B1AE] rounded-[60px] font-medium text-white xs:text-[16px] md:text-[24px] text-[24px]">
          <a href="#">HA, BU MEN</a>
        </button>
      </div>
    </div>
  );
};

export default Topik;
