import useCarousel from "@/hooks/useCarousel";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";
// import { MediaSingleItemData } from "@/types/tmdb/parsed";

type Props = {
  // items: MediaSingleItemData[];
};

const Carousel = ({ items }: any) => {
  console.log(items.genres, "data");

  const {
    index,
    setIndex,
    next,
    back,
    resetCarouselTimeout,
    setCarouselTimeout,
  } = useCarousel(items.length);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: back,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      onMouseEnter={() => resetCarouselTimeout()}
      onMouseLeave={() => setCarouselTimeout()}
      className="mx-auto container overflow-hidden rounded-lg"
    >
      <div className="relative w-full">
        <div
          {...handlers}
          className="transation whitespace-nowrap duration-1000 ease-in-out"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {items.map((data: any) => {
            return (
              <div key={data.id} className="inline-block w-full">
                <figure className="relative overflow-visible whitespace-normal">
                  <div className="relative h-[350px] w-full bg-gradient-to-t from-black">
                    {data.poster ? (
                      <Image
                        alt={data.title}
                        fill={true}
                        className="pointer-events-none w-full h-[350px] rounded-lg object-cover bg-top opacity-50 shadow-2xl blur-[1px]"
                        src={data.poster}
                      />
                    ) : null}
                  </div>
                  <figcaption className="pointer absolute bottom-0 flex h-full w-full flex-col justify-center bg-gradient-to-tr from-black/50 px-10 md:px-24">
                    <div>
                      <div>
                        <span className="text-2xl md:text-5xl text-white">
                          {data.title_en}
                        </span>
                        <p className="w-full pt-1.5 text-[15px] text-white/70 line-clamp-3 md:w-3/5 md:pt-4 md:text-base">
                          {data.year}
                        </p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 z-[999]">
          {items.map(({ id }, idx) => (
            <button
              key={id}
              onClick={() => setIndex(idx)}
              className={cn(
                "h-1.5 rounded-3xl bg-white md:h-2",
                { "w-3 bg-opacity-50 md:w-4": index !== idx },
                {
                  "w-6 md:w-8": index === idx,
                }
              )}
              aria-current={index === idx}
              aria-label={`Go to slide ${idx} of ${items.length}`}
            ></button>
          ))}
        </div>

        <button
          onClick={() => back()}
          className="group absolute top-0 left-0 z-10 flex h-full cursor-pointer items-center justify-center px-1 opacity-50 focus:outline-none hover:opacity-100 md:px-4"
        >
          <span className="inline-flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-white md:h-8 md:w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          onClick={() => next()}
          className="group absolute top-0 right-0 z-10 flex h-full cursor-pointer items-center justify-center px-1 opacity-50 focus:outline-none hover:opacity-100 md:px-4"
        >
          <span className="inline-flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-white md:h-8 md:w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
