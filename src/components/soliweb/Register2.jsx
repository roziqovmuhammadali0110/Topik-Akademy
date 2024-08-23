const Register2 = () => {
  return (
    <div className="w-full py-5 flex items-center justify-center">
      <div className="w-[80%] xs:w-[100%] xl:w-[90%] 2xl:w-[80%] xs:py-4 lg:py-0 lg:h-[320px] rounded-2xl bg-[#D0ECE9] flex xs:flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[50%] items-center justify-center flex flex-col space-y-7 p-5 text-center lg:text-left">
          <h1 className="text-[40px] xs:text-[30px] md:text-[35px] lg:text-[40px] font-medium w-full lg:w-[300px]">
            Savollaringiz qoldimi?
          </h1>
          <p className="text-[20px] xs:text-[15px] md:text-[17px] lg:text-[20px] w-full lg:w-[300px]">
            Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha
            savollaringizga javob beramiz.
          </p>
        </div>
        <div className="w-[50%] flex items-center justify-center p-5">
          <form className="flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-[350px] xs:w-[250px] md:w-[330px] px-5 lg:w-[350px] p-[13px] border border-slate-900 bg-[#BFF1C5] rounded-3xl"
            />
            <input
              type="tel"
              placeholder="+99899 999-99-99"
              className="w-[350px] xs:w-[250px] md:w-[330px] px-5 lg:w-[350px] p-[13px]  border border-slate-900 bg-[#BFF1C5] rounded-3xl"
            />
            <a href="#">
              <button className="w-[350px] xs:w-[250px] md:w-[330px] lg:w-[350px] p-[15px] font-bold text-white bg-[#68B5B2] rounded-3xl">
                SAVOL BERISH
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register2;
