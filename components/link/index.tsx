import Link from "next/link";
import React from "react";

type LinkType = {
  link: string;
  title: string;
};

const Menu = ({ link, title }: LinkType) => {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default Menu;
