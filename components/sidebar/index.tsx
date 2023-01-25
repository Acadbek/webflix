import Link from "next/link";
import React from "react";
import Menu from "../link";
import { data } from "@/utils/sidebar";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sticky top-[45px]">
      <div className="text-white w-52 h-full">
        <ul className="flex flex-col gap-1 py-6">
          <li className="text-yellow-500 text-[25px]">
            <Link href={"/"}>Trending</Link>
          </li>
          <li className="text-[25px]">
            <Link href={"/"}>Popular</Link>
          </li>
        </ul>
        <hr />
        <div className=" flex flex-col gap-4">
          <p className="text-[25px] mt-4">Genres</p>
          <ul className="h-[380px] overflow-y-scroll text-[18px] flex flex-col gap-4">
            {data.map((item) => (
              <Menu key={item.id} link={item.link} title={item.title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
