import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function OrbitalMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default OrbitalMap;