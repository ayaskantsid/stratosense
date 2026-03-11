import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { coords } from "../types";
const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
  coords: coords;
  onMapClick: (lat:number, lon: number) => void;
  mapType: string;
};

function Map({ coords, onMapClick, mapType }: Props) {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={8}
      style={{ width: "700px", height: "400px" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`} />
      <Marker position={[coords.lat, coords.lon]} />
    </MapContainer>
  );
}

function MapClick({ onMapClick, coords }: { onMapClick: (lat:number, lon: number) => void, coords: coords }) {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    onMapClick(lat, lng);
  });

  return null;
}

export default Map;
