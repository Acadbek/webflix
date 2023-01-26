import Link from "next/link";
import React from "react";

type LinkType = {
  link: string;
  title: string;
};

const Menu = ({ link, title }: LinkType) => {
  let style = {};
  return (
    <li className="p-1 tracking-wider">
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default Menu;
