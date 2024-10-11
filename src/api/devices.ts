import { Application } from 'express';
import { Database } from '../utils/JsonFileReader';

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
  specs: {
    manufacturer: string;
    model: string;
    max_flow_rate?: string; // Optional property
    pressure_range?: string; // Optional property
    battery_life: string;
    connectivity: string;
  };
  readings: {
    last_flow_rate?: string; // Optional property
    pressure?: string;
    timestamp: string;
  };
  firmwareVersion: string;
}

export function createDevicesApi(app: Application) {
  app.get('/api/devices', async (req, res) => {
    const devices = await Database.readData<Device>('devices.json');
    res.send(devices);
  });
}
