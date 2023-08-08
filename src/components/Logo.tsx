import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="text-[20px] font-['Poppin-sb']">
      <span className="text-white">MOVIE</span>
      <span className="text-blue-500">MATE</span>
    </Link>
  );
};

export default Logo;
