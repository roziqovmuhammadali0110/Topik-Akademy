import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-black text-white flex items-center justify-between py-6 text-xl rounded-2xl p-8">
      <div>
        <img
          src="https://static.tildacdn.info/tild6461-3631-4933-b438-333065383736/logo_horizontal.svg"
          alt=""
        />
      </div>
      <div className="xs:flex-col md:flex-row flex items-center justify-between space-y-5 w-[60%] xs:w-[90%] md:w-[75%]">
        <ul className=" flex items-center justify-center gap-4 xs:text-[13px] md:text-[16px] lg:text-[18px] font-medium leading-3 text-[17px] xs:flex-col md:flex-row">
          <li>
            <a href="#topik">Nega biz</a>
          </li>
          <li>
            <a href="#natija">Natijalar</a>
          </li>
          <li>
            <a href="#kurs">Kurslar</a>
          </li>
          <li>
            <a href="#savollar">Savollar</a>
          </li>
        </ul>
        <div className=" flex items-center justify-center gap-5 xs:gap-2 md:gap-3 lg:gap-5 text-[25px]">
          <span>
            <BsFillTelephoneFill />
          </span>
          <span>
            <FaTelegramPlane />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
