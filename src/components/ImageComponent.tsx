import React, { useRef, useState } from "react";
import user from "../assets/user.png";

interface ImageComponentProps {
  src: string;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  className = "",
}) => {
  const image = useRef<HTMLImageElement>(null);
  const [valid, setValid] = useState(true);

  const checkValid = () => {
    if (
      !image.current!.complete ||
      image.current!.naturalWidth < 1 ||
      image.current!.naturalHeight < 1
    ) {
      setValid(false);
    }
  };

  if (valid) {
    return (
      <img
        src={src}
        onLoad={checkValid}
        onError={() => setValid(false)}
        ref={image}
        className={className}
      />
    );
  }

  return <img src={user} alt="default image" className={className} />;
};

export default ImageComponent;
