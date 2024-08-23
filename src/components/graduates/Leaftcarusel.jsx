// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Leaftcarusel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={6}
      slidesPerView={4}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      speed={2000}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3131-6162-4436-b066-336161303636/-/resize/654x/-/format/webp/noname_1_page-0001.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild6537-6337-4238-a138-336561656364/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/486x/-/format/webp/noname_12_page-0001.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3239-6530-4163-a266-306438333536/-/resize/486x/-/format/webp/noname_page-0001_.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/486x/-/format/webp/noname_12_page-0001.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild6333-3934-4464-b164-663263616132/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 6
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://static.tildacdn.com/tild3332-3135-4034-b965-613430363666/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://static.tildacdn.com/tild3734-3062-4339-b936-323936656136/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 5
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3131-6162-4436-b066-336161303636/-/resize/654x/-/format/webp/noname_1_page-0001.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild6537-6337-4238-a138-336561656364/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[27px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/486x/-/format/webp/noname_12_page-0001.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3239-6530-4163-a266-306438333536/-/resize/486x/-/format/webp/noname_page-0001_.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 6
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/486x/-/format/webp/noname_12_page-0001.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 5
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://optim.tildacdn.pub/tild6333-3934-4464-b164-663263616132/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 4
        </button>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center">
        <img
          src="https://static.tildacdn.com/tild3332-3135-4034-b965-613430363666/photo_2023-01-29_08-.jpg"
          alt=""
        />
        <button className="absolute top-[260px] w-[202px] h-[52px] rounded-xl bg-[#B4DBBB] flex items-end p-3 font-normal text-[23px]">
          Topik 6
        </button>
      </SwiperSlide>
    </Swiper>
  );
};

export default Leaftcarusel;
