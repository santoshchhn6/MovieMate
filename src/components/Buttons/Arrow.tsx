import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  direction: "left" | "right";
  onClick(): void;
  disabled: boolean;
  className?: string;
}

const Arrow = ({ direction, onClick, disabled, className = "" }: Props) => {
  const btnStyle = `bg-gray-950 p-[5px]  text-blue-500 text-[50px] rounded-full hover:text-white cursor-pointer ${
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
