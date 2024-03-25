import SearchMovie from "./SearchMovie";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import { margin, padding } from "../style/style";

const Header = () => {
  return (
    <div
      className={` h-[60px] bg-gray-900 flex items-center gap-3 justify-between ${padding}`}
    >
      <div className="flex gap-3 items-center">
        <AiOutlineMenu className="text-white text-[2rem] hover:text-blue-700 cursor-pointer" />
        <Logo />
      </div>
      <div className=" w-[100%] flex justify-center">
        <SearchMovie />
      </div>
    </div>
  );
};

export default Header;
