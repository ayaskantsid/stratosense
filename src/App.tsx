// import { useQuery } from "@tanstack/react-query";
// import { getWeather } from "./api";
import DailyForecast from "./components/cards/DailyForecast";
import { Suspense } from "react";
import HourlyForecase from "./components/cards/HourlyForecase";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";

function App() {
  // const { data } = useQuery({
  //   queryKey: ["weather"],
  //   queryFn: () => getWeather({ lat: 28.67, lon: 77.46 }),
  // });

  return (
    <div className="flex flex-col gap-8">
      <Suspense fallback={<div>Loading Current Weather...</div>}>
        <CurrentWeather />
      </Suspense>
      <Suspense fallback={<div>Loading Hourly Forecast...</div>}>
        <HourlyForecase />
      </Suspense>
      <Suspense fallback={<div>Loading Daily Forecast...</div>}>
        <DailyForecast />
      </Suspense>
      <Suspense fallback={<div>Loading Additional Info...</div>}>
        <AdditionalInfo />
      </Suspense>
    </div>
  );
}

export default App;
