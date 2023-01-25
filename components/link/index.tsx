import Link from "next/link";
import React from "react";

const Menu = ({ link, title }) => {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default Menu;
