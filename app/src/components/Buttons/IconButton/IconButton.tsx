import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export const IconButton = ({ className, icon, onClick }: IconButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.button, className)}
    >
      {icon}
    </button>
  );
};
