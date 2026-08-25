import type { Satellite } from "../data/satellites";

type SatelliteCardProps = {
  satellite: Satellite;
  onSelect: (satellite: Satellite) => void;
  isSelected: boolean;
};

function SatelliteCard({
  satellite,
  onSelect,
  isSelected,
}: SatelliteCardProps) {
  return (
    <button
      className={`satellite-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(satellite)}
    >
      <h3>{satellite.name}</h3>
      <p>Status: {satellite.status}</p>
      <p>Altitude: {satellite.altitudeKm} km</p>
    </button>
  );
}

export default SatelliteCard;