export interface Device {
  id: string;
  name: string;
  type: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  status: string;
  user_id: number;
  last_maintenance: string;
  specs: Specs;
  readings: Readings
  firmwareVersion: string;
}

export interface Specs {
  manufacturer: string;
  model: string;
  max_flow_rate?: string; // Propiedad opcional
  pressure_range?: string;
  battery_life: string;
  connectivity: string;
}

export interface Readings {
  last_flow_rate?: string;
  pressure?: string;
  timestamp: string;
}
