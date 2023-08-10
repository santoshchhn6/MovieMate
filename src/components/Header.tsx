import SearchMovie from "./SearchMovie";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import { margin, padding } from "../style/style";
// import { useScrollHandler } from "../utils/hooks/useScrollHandler";

const Header = () => {
  // const scrollPosition = useScrollHandler();
  // const style = "hover:text-blue-500 cursor-pointer";
  return (
    <div
      // className={` w-[100%] h-[60px] flex items-center gap-3 justify-between px-3 py-2 pr-10  z-10 ${
      //   scrollPosition > 60
      //     ? "bg-black/80 backdrop-blur-lg"
      //     : "bg-black/20 backdrop-blur-lg"
      // }`}
      className={` h-[60px] bg-gray-900 flex items-center gap-3 justify-between ${padding}`}
    >
      <div className="flex gap-3 items-center">
        <AiOutlineMenu className="text-white text-[20px] hover:text-blue-700 cursor-pointer" />
        <Logo />
      </div>

      <SearchMovie />
    </div>
  );
};

export default Header;
