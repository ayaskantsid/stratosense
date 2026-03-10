import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";
import type { coords } from "../../types";

type Props = {
  coords: coords;
};

export default function DailyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon}),
  });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data && data?.daily.length > 0 ? (
        data?.daily.map((day) => (
          <div key={day.dt} className="flex justify-between">
            <p className="w-0">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </p>
            <WeatherIcon src={day.weather[0].icon} />
            <p>{day.temp.day}℃</p>
            <p className="text-gray-500">{Math.round(day.temp.min)}℃</p>
            <p className="text-gray-500">{Math.round(day.temp.max)}℃</p>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </Card>
  );
}
