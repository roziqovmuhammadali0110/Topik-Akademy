const text = [
  {
    id: "01",
    title: "Professional ustozlar",
    text: "Sizga 4 yildan ortiq tajribaga va Topik darajasi 6 bo'lgan o'qituvchilar dars beradi."
  },
  {
    id: "02",
    title: "Bepul coworking zonalar",
    text: "Erkin dars qilish, netvorking va o'z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud"
  },
  {
    id: "03",
    title: "Haftalik tadbirlar",
    text: "Topik akademy jamoasi o'quvchilari uchun doimiy ravishda qo'shimcha tadbirlar tashkillab keladi"
  },
  {
    id: "04",
    title: "Bepul sinov imtihonlari",
    text: "Har oy davomida tashkillanadigan sinov imtihonlarida qatnashib o'z darajangizni bilib borasiz"
  },
  {
    id: "05",
    title: "Yordamchi kuratorlar",
    text: "Darslarni o'zlashtirishda qiyinchilik bo'lsa sizga yordam beradigan kuratoringiz bo'ladi"
  },
  {
    id: "06",
    title: "Konsulting xizmatlar",
    text: "Muvafaqqiyatli bitirgan talabalarimizga Janubiy Koreyadao'qish uchun visa olishda, universitet tanlash va grand yutishda yordam beramiz"
  }
];

const Connection = () => {
  return (
    <div className="space-y-[120px] py-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          Nima uchun aynan TOPIK academy?
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
              {item.title}
            </h2>
            <p className="mt-2 text-md text-[#3E3E3E]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connection;
