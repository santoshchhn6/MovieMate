import React, { useRef, useState } from "react";
import no_image from "../assets/no_image.webp";

interface ImageComponentProps {
  src: string;
  alt?: string;
  className?: string;
  defaultImage?: string;
  style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  defaultImage = no_image,
  className = "",
  alt = "",
  style = {},
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
        alt={alt}
        style={style}
      />
    );
  }

  return (
    <img
      src={defaultImage}
      alt="default image"
      className={className}
      style={style}
    />
  );
};

export default ImageComponent;
