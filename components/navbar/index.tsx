import Input from "@/components/generics/input";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 nav fixed top-0 w-full bg-slate-600">
      <div className="container flex text-white items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="logo text-[35px] mt-1 text-[#DB202C]">
            Webflix
          </Link>
          <Input />
        </div>
        <ul className="flex items-center gap-8">
          <li>Movies</li>
          <li>Movies</li>
          <li>Movies</li>
          <li>Movies</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
