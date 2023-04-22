import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  direction: "left" | "right";
  onClick(): void;
  disabled: boolean;
}

const Arrow = ({ direction, onClick, disabled }: Props) => {
  const btnStyle = `border bg-gray-800 p-[5px] border-gray-600 text-gray-600 text-[35px] rounded-full hover:bg-gray-700 hover:text-gray-500 cursor-pointer ${
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
        <AiOutlineArrowLeft className={`${btnStyle}`} onClick={handleOnClick} />
      ) : (
        <AiOutlineArrowRight
          className={`${btnStyle}`}
          onClick={handleOnClick}
          disabled
        />
      )}
    </>
  );
};

export default Arrow;
