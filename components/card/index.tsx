import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  poster: string;
  title: string;
  year: number;
  id: number;
};

const Card = ({ data }: Props) => {
  console.log(data, "data");

  return (
    <Link href={String(data.id)}>
      <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-xl hover:brightness-125">
        <Image src={data.poster} width={229} height={344} alt={data.title} />
        <div className="absolute bottom-0 left-0 z-10 flex h-2/3 w-full flex-col justify-end bg-gradient-to-t from-black px-5 py-4">
          <h4 className="font-semibold">{data.title_en}</h4>
          <div className="flex items-center justify-between gap-x-1">
            <span className="text-sm font-semibold text-white/70">
              {data.year}
            </span>
            <span className="flex items-center gap-x-1">{data.quality}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
