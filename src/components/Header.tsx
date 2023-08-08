import SearchMovie from "./SearchMovie";
import { AiOutlineMenu } from "react-icons/ai";
import { useScrollHandler } from "../utils/hooks/useScrollHandler";
import Logo from "./Logo";

const Header = () => {
  const scrollPosition = useScrollHandler();
  const style = "hover:text-blue-500 cursor-pointer";
  return (
    <div
      className={` w-[100%] h-[60px] flex items-center gap-3 justify-between px-3 py-2 pr-10 fixed top-0 z-10 ${
        scrollPosition > 60 ? "bg-black/80 backdrop-blur-lg" : null
      }`}
    >
      <div className="flex gap-3 items-center">
        <AiOutlineMenu className="text-white text-[20px] hover:text-blue-700 cursor-pointer" />
        <Logo />
      </div>
      <div className="flex gap-5 text-[16px] font-semibold">
        <span className={`${style}`}>POPULAR</span>
        <span className={`${style}`}>UPCOMING</span>
        <span className={`${style}`}>NOW PLAYING</span>
        <span className={`${style}`}>TOP RATED</span>
      </div>
      <SearchMovie />
    </div>
  );
};

export default Header;
