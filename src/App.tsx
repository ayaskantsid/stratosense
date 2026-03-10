import DailyForecast from "./components/cards/DailyForecast";
import { Suspense, useState } from "react";
import HourlyForecase from "./components/cards/HourlyForecase";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import type { coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { getGeocode } from "./api";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [coordinates, setCoordinates] = useState<coords>({
    lat: 28.67,
    lon: 77.46,
  });
  const [location, setLocation] = useState<string>("Tokyo");

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoordinates({ lat, lon });
    setLocation("custom");
  };

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown location={location} setLocation={setLocation} />
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
