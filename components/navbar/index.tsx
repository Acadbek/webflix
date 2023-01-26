import Input from "@/components/generics/input";
import Link from "next/link";
import Menu from "@/components/link";
import Image from "next/image";
import hamburger from "@/public/icons/hamburger.svg";
import { menu } from "@/utils/menu";

const Navbar = ({}: any) => {
  return (
    <div>
      <nav className="p-4 nav fixed top-0 w-full bg-slate-600">
        <span className="loader"></span>
        <div className="container flex text-white items-center justify-between">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="logo text-[35px] mt-1 text-[#DB202C] uppercase"
            >
              webflix
            </Link>
            <div className="hidden lg:block md:block">
              <Input />
            </div>
          </div>
          <div className="hidden lg:block md:block">
            <ul className="flex items-center gap-8">
              {menu.map(({ title, id, link }) => (
                <Menu key={id} link={link} title={title} />
              ))}
            </ul>
          </div>
          <div className="lg:hidden md:hidden block cursor-pointer">
            <Image src={hamburger} alt="hamburger" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
