import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// AccordionItem Component
const AccordionItem = ({ isOpen, toggleAccordion, titleKey, contentKey }) => {
  const { t } = useTranslation();
  return (
    <div className="border-t-2 border-gray-300 mb-2 xs:w-[100%] md:w-[85%] xl:w-[80%]">
      <button
        onClick={toggleAccordion}
        className="w-full text-left px-4 py-4 hover:bg-gray-300 flex items-center justify-between">
        <h2 className="text-lg xs:text-[14px] md:text-[16px] lg:text-lg font-medium text-[#463D33]">
          {t(titleKey)}
        </h2>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          } w-10 h-10 flex items-center justify-center`}>
          <div className="text-3xl flex items-center justify-center font-bold w-[34px] h-[34px] rounded-[50%] bg-slate-600 text-white">
            +
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-300 rounded-b-lg transition-all duration-300 text-lg xs:text-[14px] md:text-[16px] lg:text-lg">
          <p>{t(contentKey)}</p>
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  titleKey: PropTypes.string.isRequired,
  contentKey: PropTypes.string.isRequired
};

// AccordionExample Component
const AccordionExample = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-[120px] py-5" id="savollar">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-[46px] xs:text-[25px] font-medium md:text-[35px] xl:text-[46px] leading-10 text-center ">
          {t("faqTitle")}
        </h1>
      </div>
      <div className="p-4 border-b-2 w-full flex items-center flex-col">
        <AccordionItem
          isOpen={openIndex === 0}
          toggleAccordion={() => handleToggle(0)}
          titleKey="accordion.item1"
          contentKey="accordion.content1"
        />
        <AccordionItem
          isOpen={openIndex === 1}
          toggleAccordion={() => handleToggle(1)}
          titleKey="accordion.item2"
          contentKey="accordion.content2"
        />
        <AccordionItem
          isOpen={openIndex === 2}
          toggleAccordion={() => handleToggle(2)}
          titleKey="accordion.item3"
          contentKey="accordion.content3"
        />
        <AccordionItem
          isOpen={openIndex === 3}
          toggleAccordion={() => handleToggle(3)}
          titleKey="accordion.item4"
          contentKey="accordion.content4"
        />
      </div>
    </div>
  );
};

export default AccordionExample;
