import { ReactNode, useState } from "react";

interface ReadMoreProps {
  maxLength: number;
  children: ReactNode;
  className?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({
  children,
  maxLength,
  className,
}) => {
  const text = children as string;
  const [isReadMore, setIsReadMore] = useState<boolean>(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {text.length >= maxLength ? (
        <p className={`my-[1rem] ${className}`}>
          {isReadMore ? `${text.slice(0, maxLength)}...` : text}
          <span
            onClick={toggleReadMore}
            className="font-bold text-blue-500 cursor-pointer mx-2 hover:text-white"
          >
            {isReadMore ? "read more" : "show less"}
          </span>
        </p>
      ) : (
        <p className={className}>{text}</p>
      )}
    </>
  );
};

export default ReadMore;
