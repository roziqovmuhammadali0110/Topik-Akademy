import AccordionExample from "./components/accordion/Accordion";
import Serticate from "./components/certificat/Serticate";
import Connection from "./components/connectio/Connection";
import Footer from "./components/footer/Footer";
import Gks from "./components/gks/GKS";
import VideoPlayer from "./components/gksVideo/VideoPlayer";
import Graduates from "./components/graduates/Graduates";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Register2 from "./components/soliweb/Register2";
import Topik from "./components/topik/Topik";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="container mx-auto space-y-14 px-3">
        <Navbar changeLanguage={changeLanguage} />
        <Header />
        <Topik />
        <Serticate />
        <Gks />
        <VideoPlayer />
        <Graduates />
        <Register />
        <Connection />
        <AccordionExample />
        <Register2 />
      </div>
      <Footer />
    </div>
  );
}
