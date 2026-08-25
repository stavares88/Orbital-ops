import type { Satellite } from "../data/satellites";

type SatelliteCardProps = {
  satellite: Satellite;
  onSelect: (satellite: Satellite) => void;
};

function SatelliteCard({
  satellite,
  onSelect,
}: SatelliteCardProps) {
  return (
    <button
      className="satellite-card"
      onClick={() => onSelect(satellite)}
    >
      <h3>{satellite.name}</h3>
      <p>Status: {satellite.status}</p>
      <p>Altitude: {satellite.altitudeKm} km</p>
    </button>
  );
}

export default SatelliteCard;