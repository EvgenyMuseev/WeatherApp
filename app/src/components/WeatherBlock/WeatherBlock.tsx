import classNames from "classnames";
import { SunPic } from "../Svg/Pics";
import { SearchIcon, WetIcon, WindIcon } from "../Svg/Icons";
import { Textfield } from "../Textfield";
import { IconButton } from "../Buttons";
import { Searchfield } from "../Searchfield";
import styles from "./WeatherBlock.module.scss";

interface WeatherBlockProps {
  className?: string;
}

export const WeatherBlock = ({ className }: WeatherBlockProps) => {
  return (
    <div className={styles.block}>
      <div className={classNames(styles.infoWrapper, className)}>
        <Searchfield/>
        <div className={styles.pic}>
            <SunPic />
        </div>
        <h2 className={styles.degree}>+30°с</h2>
        <h3 className={styles.city}>Москва</h3>
        <div className={styles.info}>
          <div className={styles.item}>
            <WetIcon className={styles.icon}/>
            <div className={styles.text}>
              <p className={styles.title}>64%</p>
              <p className={styles.subtitle}>Влажность</p>
            </div>
          </div>
          <div className={styles.item}>
            <WindIcon className={styles.icon}/>
            <div className={styles.text}>
              <p className={styles.title}>18 km/h</p>
              <p className={styles.subtitle}>Скорость ветра</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
