import classNames from "classnames";
import { NotFoundPic} from "../Svg/Pics";
import { WetIcon, WindIcon } from "../Svg/Icons";
import { Searchfield } from "../Searchfield";
import { renderWeatherPicture } from "../../helpers/renderWeatherPicture";
import { ErrorField } from "../ErrorField";
import styles from "./WeatherBlock.module.scss";
import { useAppSelector } from "../../hook";

interface WeatherBlockProps {
  className?: string;
}

export const WeatherBlock = ({ className }: WeatherBlockProps) => {
  const weatherInfo = useAppSelector((state) => state.search.cityWeatherInfo);
  const statusText = useAppSelector((state) => state.search.statusText);
  const absoluteZero = 273.15;

  const convertToCelsius = (kalvin: number) => {
    return Math.round(kalvin - absoluteZero);
  };

  return (
    <div className={styles.block}>
      <div className={classNames(styles.infoWrapper, className)}>
        <Searchfield className={styles.searchfield}/>
        {statusText === "Город не найден" && (
          <ErrorField pic={<NotFoundPic/>} textError="Город не найден:("/>
        )}
        {statusText === "Город найден" && (
          <>
            <div className={styles.pic}>
              {renderWeatherPicture(weatherInfo?.weather?.[0]?.description)}
            </div>
            <h2 className={styles.degree}>
              {convertToCelsius(weatherInfo?.main?.temp)}°с
            </h2>
            <h3 className={styles.city}>{weatherInfo?.name}</h3>
            <div className={styles.info}>
              <div className={styles.item}>
                <WetIcon className={styles.icon} />
                <div className={styles.text}>
                  <p className={styles.title}>
                    {weatherInfo?.main?.humidity} %
                  </p>
                  <p className={styles.subtitle}>Влажность</p>
                </div>
              </div>
              <div className={styles.item}>
                <WindIcon className={styles.icon} />
                <div className={styles.text}>
                  <p className={styles.title}>{weatherInfo?.wind?.speed} м/с</p>
                  <p className={styles.subtitle}>Скорость ветра</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
