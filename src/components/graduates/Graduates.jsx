import Leaftcarusel from "./Leaftcarusel";

const Graduates = () => {
  return (
    <div className="py-10 space-y-10">
      <div className="w-full flex items-center justify-center">
        <h1 className="max-w-[1000px] text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-[55px] xs:leading-6 md:leading-10 xl:leading-[55px] text-center ">
          Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant
          yutishda yordam beramiz
        </h1>
      </div>
      <div className="flex items-center justify-center  ">
        <div className="w-[35%] xs:w-full lg:w-[35%] space-y-12  bg-white rounded-md shadow-right-3xl">
          <h2 className="text-[22px] text-[#000000]">
            <span className="text-[#73C0BD]">TOPIK academy consulting</span>{" "}
            academy consulting jamoasi sizga universitet tanlash, visa olish va
            grant yutishingizda yaqindan ko’maklashadi
          </h2>
          <div className="space-y-4">
            <p className="text-[#000000] text-[16px] w-[237px] pb-3">
              Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!
            </p>
            <a href="#">
              <button className="w-[280px] xs:w-[240px] md:w-[280px] xs:h-[50px] md:h-[65px] h-[65px] bg-[#63B1AE] rounded-[60px] font-medium text-white xs:text-[14px] md:text-[18px] text-[18px]">
                ARIZA QOLDIRISH
              </button>
            </a>
          </div>
        </div>
        <div className="w-[65%] xs:hidden lg:flex">
          <Leaftcarusel />
        </div>
      </div>
    </div>
  );
};

export default Graduates;
