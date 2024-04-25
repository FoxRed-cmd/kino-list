import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "./CardImage.module.scss";

interface CardImageProps {
  className?: string;
  src: string;
  alt: string;
}

export const CardImage = (props: CardImageProps) => {
  const { src, alt, className = "" } = props;
  return (
    <img src={src} alt={alt} className={classNames(cls.poster, [className])} />
  );
};
