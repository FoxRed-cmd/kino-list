import { ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "src/shared/lib/classNames/classNames";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, className, onClick } = props;
  return (
    <button
      className={classNames(cls.Button, [className ?? ""])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
