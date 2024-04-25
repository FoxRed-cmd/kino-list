import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "./CardText.module.scss";
import { ReactNode } from "react";

interface CardTextProps {
  className?: string;
  children?: ReactNode;
}

export const CardText = (props: CardTextProps) => {
  const { children, className = "" } = props;
  return (
    <div className={classNames(cls.cardText, [className])}>{children}</div>
  );
};
