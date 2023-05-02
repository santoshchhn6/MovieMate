import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className=" flex items-center gap-3 justify-between">
      <div className="flex gap-3 items-center">
        <AiOutlineMenu className="text-white text-[20px] hover:text-blue-700 cursor-pointer" />
        <Link to={"/"} className="text-[20px] font-semibold">
          <span>MOVIE</span>
          <span className="text-blue-700">MATE</span>
        </Link>
      </div>
      <SearchInput />
    </div>
  );
};

export default Header;
