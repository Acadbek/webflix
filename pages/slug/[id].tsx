import axios from "axios";
import Image from "next/image";
import play from "@/public/icons/play.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Player from "@/components/player";
import { useState } from "react";

export const getStaticPaths = async () => {
  try {
    const data = await axios.get(`${process.env.API_URL}?page=$1&items=266`);
    const datas = await data?.data?.data;

    const paths = datas?.movieList.map((item: any) => {
      return {
        params: {
          id: String(item.id),
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async (context: any) => {
  try {
    let id: number = context.params.id;
    const data = await axios.get(`${process.env.API_URL_SLUG}?id=${id}`);
    return {
      props: {
        data: data?.data?.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
  return hDisplay + mDisplay;
}

const Details = ({ data }: any) => {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false);
  const myStyle = {
    backgroundImage: `linear-gradient(to right, rgb(32, 32, 32) 150px, rgba(60, 50, 20, 0.64) 70%), url(${data?.files[0]?.poster})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "80px",
    opacity: "5",
  };
  const open = (e) => {
    setOpenVideoPlayer(true);
    e.stopPropagation();
  };
  const close = (e) => {
    setOpenVideoPlayer(false);
    e.stopPropagation();
  };
  return (
    <div
      onClick={close}
      style={myStyle}
      className="absolute -top-4 -z-50 w-full bg-cover bg-left bg-no-repeat"
    >
      <div className="container">
        <div className="text-white !z-50 flex gap-10 items-start px-[50px] pt-[70px]">
          <div className="">
            <Image
              className="rounded-[8px]"
              src={data?.poster}
              alt={data?.title_en}
              width={350}
              height={500}
            />
          </div>
          <div className="w-10/12">
            <h1 className="text-xl font-bold md:text-3xl">{data?.title_en}</h1>
            <p className="flex items-center gap-x-1 my-4">
              {data?.year} - {secondsToHms(data?.files[0]?.fileDuration)}
            </p>
            <div className="flex items-center gap-4">
              {data?.genres.map((genre) => (
                <div
                  className="rounded-3xl border-2 border-yellow-500 px-3 py-1 text-xs font-semibold transition "
                  key={genre?.id}
                >
                  {genre?.title}
                </div>
              ))}
              <div>Rating: {data?.kp_rating}</div>
              <button
                onClick={open}
                className="inline-flex items-center justify-center rounded-full p-2 ring-1 ring-white/70 transition hover:ring-2 hover:ring-yellow-400"
              >
                <Image src={play} alt="play icon" />
              </button>
            </div>
            <p className="mt-4">{data?.description}</p>

            <p className="mt-4 font-bold">
              Country:
              {data?.countries.map((country) => (
                <span key={country} className="text-white/70 ml-2">
                  {country?.title}
                </span>
              ))}
            </p>
            {openVideoPlayer && <Player />}
          </div>
        </div>
        <h2 className="text-lg font-bold mt-4 text-white pl-[50px]">
          Cast of {data?.title_en}
        </h2>
        <div className="flex mb-4 mt-[100px] gap-4 text-white px-[50px]">
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data?.people[0]?.employees?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="flex flex-col items-center">
                  <Image
                    className="w-[150px] h-[150px] rounded-full object-cover shadow-2xl focus:outline-none focus:ring-4 sm:h-[150px]"
                    src={item?.photo}
                    width={150}
                    height={150}
                    alt="asdas"
                  />
                  <p className="truncate text-xs font-bold md:text-sm mt-2">
                    {item?.full_name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Details;
