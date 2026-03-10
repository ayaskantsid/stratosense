import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 28.67, lon: 77.46 }),
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
