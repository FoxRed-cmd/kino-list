import { ReactNode } from "react";
import cls from "./Card.module.scss";
import { classNames } from "src/shared/lib/classNames/classNames";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = (props: CardProps) => {
  const { children, className = "" } = props;

  return <div className={classNames(cls.Card, [className])}>{children}</div>;
};
