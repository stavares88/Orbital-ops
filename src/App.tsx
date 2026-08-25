import { useState } from "react";
import "./App.css";
import DashboardPanel from "./components/DashboardPanel";
import SatelliteCard from "./components/SatelliteCard";
import OrbitalMap from "./components/OrbitalMap";
import MissionStatusBar from "./components/MissionStatusBar";

import { satellites } from "./data/satellites";
import type { Satellite } from "./data/satellites";

function App() {
  const [selectedSatellite, setSelectedSatellite] =
    useState<Satellite | null>(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Orbit Nexus</h1>
        <p>Satellite Mission Operations Dashboard</p>
      </header>

      <MissionStatusBar trackedSatellites={satellites.length} />

      <main className="dashboard">
        <DashboardPanel title="Active Satellites">
          {satellites.map((satellite) => (
           <SatelliteCard
        key={satellite.id}
        satellite={satellite}
        onSelect={setSelectedSatellite}
        isSelected={selectedSatellite?.id === satellite.id}
/>
))}
        </DashboardPanel>

        <DashboardPanel title="Orbital Map">
          <OrbitalMap />
        </DashboardPanel>

        <DashboardPanel title="Mission Status">
          {selectedSatellite ? (
            <>
              <h3>{selectedSatellite.name}</h3>
              <p>Status: {selectedSatellite.status}</p>
              <p>Altitude: {selectedSatellite.altitudeKm} km</p>
            </>
          ) : (
            <p>Select a satellite to view mission details.</p>
          )}
        </DashboardPanel>
      </main>
    </div>
  );
}

export default App;