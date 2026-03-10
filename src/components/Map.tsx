import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { coords } from "../types";

type Props = {
  coords: coords;
  onMapClick: (lat:number, lon: number) => void;
};

function Map({ coords, onMapClick }: Props) {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={12}
      style={{ width: "400px", height: "400px" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
