import { ReactNode } from "react";
import cls from "./Row.module.scss";

interface RowProps {
  children: ReactNode;
}

export const Row = ({ children }: RowProps) => {
  return <div className={cls.Row}>{children}</div>;
};
