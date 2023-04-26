import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  direction: "left" | "right";
  onClick(): void;
  disabled: boolean;
  className?: string;
}

const Arrow = ({ direction, onClick, disabled, className = "" }: Props) => {
  const btnStyle = `border bg-gray-800 p-[5px] border-blue-700 text-blue-700 text-[45px] rounded-full hover:border-white hover:text-white cursor-pointer ${
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
