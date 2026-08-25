export type Satellite = {
  id: number;
  name: string;
  status: string;
  altitudeKm: number;
};

export const satellites: Satellite[] = [
  {
    id: 1,
    name: "Landsat 9",
    status: "Operational",
    altitudeKm: 705,
  },
  {
    id: 2,
    name: "Sentinel-2A",
    status: "Operational",
    altitudeKm: 786,
  },
  {
    id: 3,
    name: "Terra",
    status: "Monitoring",
    altitudeKm: 705,
  },
];