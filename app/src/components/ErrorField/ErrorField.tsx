import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./ErrorField.module.scss";

interface ErrorFieldProps {
  className?: string;
  textError?: string;
  pic?: ReactNode;
}

export const ErrorField = ({
  className,
  textError,
  pic,
}: ErrorFieldProps) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.pic}>{pic}</div>
      <p className={styles.text}>{textError}</p>
    </div>
  );
};
