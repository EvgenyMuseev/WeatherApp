import classNames from "classnames";
import styles from "./WeatherWidget.module.scss";
import { WeatherBlock } from "../WeatherBlock";
import { Textfield } from "../Textfield";
import { Container } from "../Container";

interface WeatherWidgetProps {
  className?: string;
}

export const WeatherWidget = ({className}: WeatherWidgetProps) => {
  return (
    <div>
      <Container>
        <div className={classNames(styles.wrapper, className)}>
          <WeatherBlock/>
        </div>
      </Container>
    </div>
  )
}
