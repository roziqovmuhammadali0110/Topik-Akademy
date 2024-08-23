const Register = () => {
  return (
    <div className="space-y-20" id="kurs">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          O’zingizga mos kursga ro’yxatdan o’ting
        </h1>
      </div>
      <div className=" flex-wrap flex items-center justify-around space-y-3">
        <div className="w-[350px] h-[410px] rounded-[45px] bg-[#F7F7F7] p-3">
          <div className="w-full">
            <img
              src="https://optim.tildacdn.pub/tild3464-3039-4433-b832-663664336461/-/resize/854x/-/format/webp/course1.png"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-[28px] font-medium text-[#4B4B4B]">
                Intiensive
              </h4>
              <p className="w-36 text-white text-[14px] p-2 text-center font-medium rounded-3xl bg-[#61ABA7]">
                Davomiyligi: 5 oy
              </p>
            </div>
            <p className="text-[#444444] w-[70%] text-[14px] font-medium">
              <span className="text-[#E5B207]">Koreys tilini</span> chuqur
              o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan
              intensive kurs.
            </p>
            <div>
              <div className="w-full flex items-center justify-between">
                <button className="w-44 text-white text-[12px] p-3 shadow-lg text-center font-medium rounded-3xl bg-[#61ABA7]">
                  RO’YXATDAN O’TISH
                </button>
                <h4 className="text-[17px] font-medium text-[#6BAAA8]">
                  970.000 so’m /oy
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[410px] rounded-[45px] bg-[#F7F7F7] p-3">
          <div className="w-full">
            <img
              src="https://optim.tildacdn.pub/tild6262-3437-4233-b834-613939346431/-/resize/854x/-/format/webp/course2.png"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-[28px] font-medium text-[#4B4B4B]">Odatiy</h4>
              <p className="w-36 text-white text-[14px] p-2 text-center font-medium rounded-3xl bg-[#61ABA7]">
                Davomiyligi: 5 oy
              </p>
            </div>
            <p className="text-[#444444] w-[50%] text-[14px] font-medium">
              Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.
            </p>
            <div>
              <div className="w-full flex items-center justify-between">
                <button className="w-44 text-white text-[12px] p-3 shadow-lg text-center font-medium rounded-3xl bg-[#61ABA7]">
                  RO’YXATDAN O’TISH
                </button>
                <h4 className="text-[17px] font-medium text-[#6BAAA8]">
                  560.000 so’m /oy
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[410px] rounded-[45px] bg-[#F7F7F7] p-3">
          <div className="w-full">
            <img
              src="https://optim.tildacdn.pub/tild6438-3938-4330-a465-613833356366/-/resize/854x/-/format/webp/course3.png"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-[28px] font-medium text-[#4B4B4B]">
                Individual
              </h4>
              <p className="w-36 text-white text-[14px] p-2 text-center font-medium rounded-3xl bg-[#61ABA7]">
                Davomiyligi: 5 oy
              </p>
            </div>
            <p className="text-[#444444] w-[95%] text-[14px] font-medium">
              O’qituvchidan<span className="text-[#E5B207]"> individual</span>{" "}
              dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar.
              Moslashuvchan grafik va individual yondashuv.
            </p>
            <div>
              <div className="w-full flex items-center justify-between">
                <button className="w-44 text-white text-[12px] p-3 shadow-lg text-center font-medium rounded-3xl bg-[#61ABA7]">
                  RO’YXATDAN O’TISH
                </button>
                <h4 className="text-[17px] font-medium text-[#6BAAA8]">
                  1.800.000 so’m /oy
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
