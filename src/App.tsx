import DailyForecast from "./components/cards/DailyForecast";
import { Suspense, useState } from "react";
import HourlyForecase from "./components/cards/HourlyForecase";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import type { coords } from "./types";

function App() {
  const [coords, setCoords] = useState<coords>({lat: 28.67, lon: 77.46});

  const onMapClick = (lat:number, lon: number) => {
    setCoords({lat, lon});
  }
  console.log("coords", coords);

  return (
    <div className="flex flex-col gap-8">
      <Map coords={coords} onMapClick={onMapClick} />
      <Suspense fallback={<div>Loading Current Weather...</div>}>
        <CurrentWeather coords={coords} />
      </Suspense>
      <Suspense fallback={<div>Loading Hourly Forecast...</div>}>
        <HourlyForecase coords={coords} />
      </Suspense>
      <Suspense fallback={<div>Loading Daily Forecast...</div>}>
        <DailyForecast coords={coords} />
      </Suspense>
      <Suspense fallback={<div>Loading Additional Info...</div>}>
        <AdditionalInfo coords={coords} />
      </Suspense>
    </div>
  );
}

export default App;
