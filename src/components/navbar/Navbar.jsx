import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage); // Saqlash
  };

  const language = localStorage.getItem("i18nextLng") || "uz";

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between xs:px-3 xl:px-10 px-10 py-5 2xl:px-10">
      <div className="flex items-end">
        <div className="w-[163px] xs:w-[92px] xs:h-[44px] md:w-[129px] xl:w-[163px] md:h-[60px]">
          <a href="#">
            <img
              src="https://optim.tildacdn.pub/tild6631-6232-4037-a439-663632313035/-/resize/258x/-/format/webp/logo.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <ul className="flex items-center justify-between xl:gap-4 2xl:gap-7 xs:hidden xl:flex">
        <li className="hover:font-bold font-medium lg:text-[14px] xl:text-[16px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#topik">{t("why_us")}</a>
        </li>
        <li className="hover:font-bold font-medium lg:text-[14px] xl:text-[16px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#natija">{t("results")}</a>
        </li>
        <li className="hover:font-bold font-medium lg:text-[14px] xl:text-[16px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#kurs">{t("courses")}</a>
        </li>
        <li className="hover:font-bold font-medium lg:text-[14px] xl:text-[16px] hover:text-blue-600 hover:underline hover:text-[19px] text-[#333333]">
          <a href="#savollar">{t("faq")}</a>
        </li>
      </ul>
      <div className="flex items-center gap-7">
        <select
          value={language}
          name="Lng"
          id="lng"
          onChange={handleChange}
          className="w-[100px] h-8 rounded-lg font-bold px-2 bg-slate-100 border-none outline-none text-slate-700">
          <option value="ru">English</option>
          <option value="uz">Uzbek</option>
        </select>

        <div className="xs:flex md:hidden text-[25px]">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}>
            <button
              onClick={toggleMenu}
              className="text-black p-4 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="mt-8 text-[15px] font-medium">
              <li onClick={closeMenu} className="p-4 border-b">
                <a href="#topik">{t("why_us")}</a>
              </li>
              <li onClick={closeMenu} className="p-4 border-b">
                <a href="#natija">{t("results")}</a>
              </li>
              <li onClick={closeMenu} className="p-4 border-b">
                <a href="#kurs">{t("courses")}</a>
              </li>
              <li onClick={closeMenu} className="p-4 border-b">
                <a href="#savollar">{t("faq")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center xs:hidden md:flex">
        <button className="font-medium xs:text-[14px] md:text-[16px] lg:text-[18px] text-[18px]">
          <a href="#">+998 (90) 062 4341</a>
        </button>
        <button className="font-normal xs:text-[14px] md:text-[16px] lg:text-[18px] text-[18px]">
          <a href="#">{t("contact_now")}</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
