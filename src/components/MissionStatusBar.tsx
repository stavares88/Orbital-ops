import { useEffect, useState } from "react";

type MissionStatusBarProps = {
  trackedSatellites: number;
};

function MissionStatusBar({
  trackedSatellites,
}: MissionStatusBarProps) {
  const [utcTime, setUtcTime] = useState(
    new Date().toISOString().slice(11, 19)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(new Date().toISOString().slice(11, 19));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mission-status-bar">
      <span className="status-item">
        <span className="status-dot"></span>
        SYSTEM ONLINE
      </span>

      <span>TRACKING: {trackedSatellites} SATELLITES</span>

      <span className="status-item">
        <span className="status-dot"></span>
        GROUND LINK: NOMINAL
      </span>

      <span>UTC: {utcTime}</span>
    </div>
  );
}

export default MissionStatusBar;