import { ReactNode } from "react";
import cls from "./Card.module.scss";
import { classNames } from "src/shared/lib/classNames/classNames";

interface CardProps {
  className?: string;
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  alignItems?: string;
  onClick?: () => void;
}

export const Card = (props: CardProps) => {
  const { children, className = "", onClick, width, height, alignItems } = props;

  return (
    <div
      onClick={onClick}
      style={{ width, height, alignItems }}
      className={classNames(cls.Card, [className])}
    >
      {children}
    </div>
  );
};
