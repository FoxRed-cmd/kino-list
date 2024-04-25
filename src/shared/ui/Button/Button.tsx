import { ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <button className={cls.Button} onClick={onClick}>
      {children}
    </button>
  );
};
