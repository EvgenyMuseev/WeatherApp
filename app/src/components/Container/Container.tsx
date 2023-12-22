import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={classNames(classNames(styles.container, className))}>
      {children}
    </div>
  );
};
