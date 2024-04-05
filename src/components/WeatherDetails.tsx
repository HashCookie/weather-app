/** @format */

import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export interface WeatherDetailProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    visability = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6.20",
    sunset = "18:48",
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="可见度"
        value={visability}
      />
      <SingleWeatherDetail
        icon={<FiDroplet />}
        information="湿度"
        value={humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="风速"
        value={windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="气压"
        value={airPressure}
      />
      <SingleWeatherDetail
        icon={<LuSunrise />}
        information="日出"
        value={sunrise}
      />
      <SingleWeatherDetail
        icon={<LuSunset />}
        information="日落"
        value={sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
