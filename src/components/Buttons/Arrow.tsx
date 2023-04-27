import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  direction: "left" | "right";
  onClick(): void;
  disabled: boolean;
  className?: string;
}

const Arrow = ({ direction, onClick, disabled, className = "" }: Props) => {
  const btnStyle = `border bg-gray-950/70 p-[5px] border-white text-white text-[45px] rounded-full hover:bg-blue-700/80 cursor-pointer ${
    disabled ? "invisible" : ""
  }`;

  const handleOnClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <>
      {direction === "left" ? (
        <AiOutlineArrowLeft
          className={`${btnStyle} ${className}`}
          onClick={handleOnClick}
        />
      ) : (
        <AiOutlineArrowRight
          className={`${btnStyle} ${className}`}
          onClick={handleOnClick}
          disabled
        />
      )}
    </>
  );
};

export default Arrow;
