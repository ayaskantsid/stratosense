import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";
import { Suspense } from "react";
import HourlyForecase from "./components/cards/HourlyForecase";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 28.67, lon: 77.46 }),
  });

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">{JSON.stringify(data?.current)?.slice(0, 100) ?? "No data"}</Card>
      <Suspense fallback={<div>Loading Hourly Forecast...</div>}>
        <HourlyForecase />
      </Suspense>
      <Suspense fallback={<div>Loading Daily Forecast...</div>}>
        <DailyForecast />
      </Suspense>
    </div>
  );
}

export default App;
