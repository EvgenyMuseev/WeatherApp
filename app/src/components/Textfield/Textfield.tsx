import { ReactNode, ChangeEvent } from "react";
import classNames from "classnames";
import styles from "./Textfield.module.scss";

interface TextfieldProps {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: string;
}

export const Textfield = ({
  className,
  onChange,
  onKeyDown,
  onBlur = () => {},
  value,
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
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        value={value}
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
