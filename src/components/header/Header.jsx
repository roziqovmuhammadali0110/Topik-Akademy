const Header = () => {
  const divStyle = {
    backgroundImage:
      "url(https://optim.tildacdn.pub/tild6130-3963-4033-b434-333530643238/-/format/webp/mainimg.png)",

    backgroundSize: "cover", // Rasm to'liq ko'rinishi uchun
    backgroundPosition: "end" // Rasm markazda joylashishi uchun
  };
  return (
    <div className="px-10 xs:px-3 md:px-5 xl:px-10" style={divStyle}>
      <div className="pt-10">
        <div className="space-y-20">
          <div>
            <h1 className="text-[64px] xs:text-[25px] md:text-[45px] xl:text-[64px] font-medium text-[#b789f8] max-w-[988px] leading-20">
              Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish
              imkoniyati
            </h1>
          </div>
          <div className="flex items-center flex-wrap space-y-4 ">
            <div className="flex items-center justify-center gap-6">
              <div className="w-[25px] h-[60px] ">
                <img
                  src="https://static.tildacdn.info/tild3463-6463-4138-b665-383266323530/decoration.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <p className="text-[17px] w-[192px] font-medium text-[#55ab62]">
                5 oyda Topikdan 6 darajagacha olishda yordam beramiz
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 pb-6">
              <div className="w-[25px] h-[60px] ">
                <img
                  src="https://static.tildacdn.info/tild3463-6463-4138-b665-383266323530/decoration.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <p className="text-[17px] font-medium w-[232px] text-[#55ab62]">
                Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish
                va ishlash imkoniyati
              </p>
            </div>
          </div>
        </div>
        {/* <div className="hero xs:block md:hidden w-[100%] h-[200px]"></div> */}
        <div className="space-y-10">
          <div className=" flex flex-col items-center justify-center max-w-[330px] space-y-4">
            <button className="w-[322px] xs:w-[240px] md:w-[330px] xs:h-[50px] md:h-[78px] h-[78px] bg-[#63B1AE] rounded-[60px] font-medium text-white xs:text-[16px] md:text-[22px] text-[22px]">
              <a href="#">BEPUL DARSGA YOZILISH</a>
            </button>
            <p className="text-[22px] xs:text-[15px] md:text-[22px] font-medium text-[#7F7F7F]">
              Birinchi darsga bepul yoziling!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
