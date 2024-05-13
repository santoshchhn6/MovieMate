import SearchMovie from "./SearchMovie";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import { margin, padding } from "../style/style";

const Header = () => {
  return (
    <div
      className={` fixed top-0 w-full min-h-[80px] pt-5 md:pt-0 bg-gradient-to-b from-black via-black/60  to-transparent flex flex-col md:flex-row items-center gap-3 justify-between ${padding} z-50`}
    >
      <div className="flex gap-3 items-center">
        <AiOutlineMenu className="md:hidden text-white text-[2rem] hover:text-blue-700 cursor-pointer" />
        <Logo />
      </div>
      <div className=" w-[100%] flex justify-center">
        <SearchMovie />
      </div>
    </div>
  );
};

export default Header;
