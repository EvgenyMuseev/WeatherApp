import {
  CloudPic,
  FreezingPic,
  RainfallPic,
  RainPic,
  StormPic,
  SunPic,
  ThundershormPic,
  OvercastCloudsPic
} from "../components/Svg/Pics";

export const renderWeatherPicture = (isWeather: string) => {
  switch (isWeather) {
    case "Clouds":
      return <CloudPic/>;
    case "clear sky":
      return <SunPic/>;
    case "snow":
      return <FreezingPic/>;
    case "light snow":
      return <FreezingPic/>;
    case "2":
      return <RainfallPic/>;
    case "3":
      return <RainPic/>;
    case "4":
      return <StormPic/>;
    case "5":
      return <ThundershormPic/>;
    case "overcast clouds":
      return <OvercastCloudsPic/>
    default:
      return <h1>404</h1>;
  }
};
