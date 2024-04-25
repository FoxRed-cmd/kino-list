import { FC, memo } from "react";
import cls from "./ToggleButton.module.scss";
import { classNames } from "src/shared/lib/classNames/classNames";

interface ToggleButtonProps {
  isToggle?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const ToggleButton: FC<ToggleButtonProps> = memo((props) => {
  const { isToggle = false, onClick, children, className = "" } = props;
  return (
    <button
      className={classNames(cls.ToggleButton, [className])}
      onClick={onClick}
    >
      <div className={classNames(cls.switch, [isToggle ? cls.is_toggle : ""])}>
        {children}
      </div>
    </button>
  );
});
