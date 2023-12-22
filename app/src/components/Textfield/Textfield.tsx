import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Textfield.module.scss";

interface TextfieldProps {
  className?: string;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: string;
}

export const Textfield = ({
  className,
  onChange = () => {},
  onBlur = () => {},
  placeholder,
  error = false,
  helperText,
  startIcon,
  endIcon,
  type = "text",
}: TextfieldProps) => {
  return (
    <div className={classNames(styles.textfieldWrapper, className)}>
      {startIcon}
      <input
        type={type}
        className={classNames(styles.textfield, {
          [styles.textfieldError]: error,
        })}
        placeholder={placeholder}
        onChange={onChange}
      />
      {endIcon}
      {error && helperText}
    </div>
  );
};
