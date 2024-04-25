import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "./CardTitle.module.scss";
import { ReactNode, memo } from "react";

interface CardTextProps {
  className?: string;
  children?: ReactNode;
  textAlign?: any;
}

export const CardTitle = memo((props: CardTextProps) => {
  const { children, className = "", textAlign } = props;
  return (
    <div
      style={{ textAlign }}
      className={classNames(cls.cardTitle, [className])}
    >
      {children}
    </div>
  );
});
