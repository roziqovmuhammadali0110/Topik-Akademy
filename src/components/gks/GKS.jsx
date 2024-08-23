const Gks = () => {
  return (
    <div className="space-y-10 pb-10">
      <div className="w-full flex items-center justify-center">
        <h1 className="max-w-[810px] text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-[55px] xs:leading-6 md:leading-10 xl:leading-[55px] text-center ">
          Koreya Universitetlariga 100% gacha grant yutish imkoniyati
        </h1>
      </div>
      <div className="w-full flex items-start justify-between gap-9 xs:flex-col xl:flex-row">
        <div className="w-[50%] xs:w-full xl:w-[50%]">
          <img
            src="https://optim.tildacdn.pub/tild3536-3566-4230-b761-306332316332/-/format/webp/Group_102.png"
            alt="gks"
            className="w-full h-full"
          />
        </div>
        <div className="w-[50%] xs:w-full xl:w-[50%] space-y-20">
          <div className="space-y-6">
            <h2 className="text-[30px] xs:text-[20px] md:text-[22px] 2xl:text-[30px] text-[#000000] font-medium">
              GKS (Global Korean Scholarship){" "}
              <span className="text-[#ABDDB1]">$70.000</span> lik Grant
            </h2>
            <p className="text-[20px] xs:text-[13px] md:text-[15px] 2xl:text-[20px] text-[#000000]">
              Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning
              Xalqaro talim bo’yicha milliy instituti tomonidan
              <span className="text-[#73C0BD]"> xorijiy </span>
              talabalarning Koreyada bakalavr va magistratura bosqichida{" "}
              <span className="text-[#73C0BD]">100% gacha to’liq grant</span> va
              oylik <span className="text-[#73C0BD]">stipendiya</span> olish
              imkoniyatingiz bor
            </p>
          </div>
          <div className="xs:hidden 2xl:flex">
            <div className="space-y-8">
              <h2 className="text-[32px] xs:text-[20px] md:text-[25px] 2xl:text-[32px] text-[#000000] font-medium">
                GKS granti sizga nima beradi
              </h2>
              <ul className="list-disc pl-5 text-[20px] xs:text-[13px] md:text-[15px] 2xl:text-[20px] text-[#000000]">
                <li>
                  Dastur boshlanganida va tugaganida Koreyaga borish hamda
                  Koreyadan qaytish xarajatlari qoplanadi.
                </li>
                <li>
                  Koreyaga yetib borganda joylashib olish uchun bir martalik
                  to’lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157
                  AQSh dollari).
                </li>
                <li>
                  Til kursi va universitetning kontrak to’lovi to’liq to’lab
                  beriladi (faqat magistr va doktorantlarga)...{" "}
                  <span className="text-[#ABDDB1]">ko’proq</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:flex 2xl:hidden">
        <div className="space-y-8">
          <h2 className="text-[32px] xs:text-[20px] md:text-[25px] 2xl:text-[32px] text-[#000000] font-medium">
            GKS granti sizga nima beradi
          </h2>
          <ul className="list-disc pl-5 text-[20px] xs:text-[13px] md:text-[15px] 2xl:text-[20px] text-[#000000]">
            <li>
              Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan
              qaytish xarajatlari qoplanadi.
            </li>
            <li>
              Koreyaga yetib borganda joylashib olish uchun bir martalik
              to’lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh
              dollari).
            </li>
            <li>
              Til kursi va universitetning kontrak to’lovi to’liq to’lab
              beriladi (faqat magistr va doktorantlarga)...{" "}
              <span className="text-[#ABDDB1]">ko’proq</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gks;
