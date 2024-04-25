import { ReactNode } from "react";
import cls from "./Column.module.scss";

interface ColumnProps {
  children: ReactNode;
}

export const Column = ({ children }: ColumnProps) => {
  return <div className={cls.Column}>{children}</div>;
};
