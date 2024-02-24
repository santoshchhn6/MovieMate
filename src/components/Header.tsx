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
        <AiOutlineMenu className="text-white text-[20px] hover:text-blue-700 cursor-pointer" />
        <Logo />
      </div>

      <ul className="flex gap-3 text-[18px] font-['OpenSans-b']">
        <li>POPULAR</li>
        <li>UPCOMING</li>
        <li>NOW PLAYING</li>
        <li>TOP RATED</li>
      </ul>

      <SearchMovie />
    </div>
  );
};

export default Header;
