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
          <div className="flex flex-col gap-2 items-center p-2" key={hour.dt}>
            <p className="whitespace-nowrap">{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}</p>
            <WeatherIcon src={hour.weather[0].icon} />
            <p>{Math.round(hour.temp)}℃</p>
            <p className="text-gray-500">{Math.round(hour.feels_like)}℃</p>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </Card>
  );
}
