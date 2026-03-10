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
      style={{ width: "700px", height: "500px" }}
    >
      <MapClick onMapClick={onMapClick} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lon]} />
    </MapContainer>
  );
}

function MapClick({ onMapClick }: { onMapClick: (lat:number, lon: number) => void }) {
  const map = useMap();

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    map.panTo([lat, lng]);
    onMapClick(lat, lng);
  });

  return null;
}

export default Map;
