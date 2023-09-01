import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  direction: "left" | "right";
  onClick(): void;
  disabled: boolean;
  className?: string;
}

const Arrow = ({ direction, onClick, disabled, className = "" }: Props) => {
  const btnStyle = `bg-gray-950/90 p-[5px] border-4 border-blue-500 text-blue-500 text-[60px] rounded-full hover:text-white hover:border-white cursor-pointer ${
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
