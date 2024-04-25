import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "./CardImage.module.scss";
import { memo } from "react";

interface CardImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

export const CardImage = memo((props: CardImageProps) => {
  const { src, alt, className = "", width, height } = props;
  return (
    <img
      src={src}
      alt={alt}
      style={{ width, height }}
      className={classNames(cls.poster, [className])}
    />
  );
});
