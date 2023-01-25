import Input from "@/components/generics/input";
import Link from "next/link";
import Menu from "../link";

const Navbar = () => {
  return (
    <nav className="p-4 nav fixed top-0 w-full bg-slate-600">
      <div className="container flex text-white items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href={"/"}
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
            <Menu link="movie" title="Movie" />
            <Menu link="movie" title="Movie" />
            <Menu link="movie" title="Movie" />
            <Menu link="movie" title="Login" />
          </ul>
        </div>
        <p className="lg:hidden md:hidden block">menu</p>
      </div>
    </nav>
  );
};

export default Navbar;
