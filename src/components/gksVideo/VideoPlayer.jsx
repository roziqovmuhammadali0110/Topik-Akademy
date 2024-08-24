import { useTranslation } from "react-i18next";

const VideoPlayer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[500px] pb-10">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/IN7u7bWAGPs"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"></iframe>
      <div className="w-full p-3 bg-[#323232] text-white text-[28px] xs:text-[12px] md:text-[18px] xl:text-[28px]">
        <h1>{t("videoPlayer.description")}</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;
