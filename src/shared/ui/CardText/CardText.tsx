import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "./CardText.module.scss";
import { ReactNode, memo } from "react";

interface CardTextProps {
  className?: string;
  children?: ReactNode;
  textAlign?: any;
}

export const CardText = memo((props: CardTextProps) => {
  const { children, className = "", textAlign } = props;
  return (
    <div
      style={{ textAlign }}
      className={classNames(cls.cardText, [className])}
    >
      {children}
    </div>
  );
});
