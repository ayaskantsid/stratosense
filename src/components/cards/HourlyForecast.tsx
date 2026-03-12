import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";
import type { coords } from "../../types";

type Props = {
  coords: coords;
};

export default function HourlyForecase({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon}),
  });
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-auto"
    >
      {data && data?.hourly.length > 0 ? (
        data?.hourly.map((hour) => (
          <div className="flex flex-col 2xl:justify-between gap-2 items-center p-2 pb-4" key={hour.dt}>
            <p className="whitespace-nowrap">{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}</p>
            <WeatherIcon className="2xl:size-11" src={hour.weather[0].icon} />
            <p>{Math.round(hour.temp)}℃</p>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </Card>
  );
}
