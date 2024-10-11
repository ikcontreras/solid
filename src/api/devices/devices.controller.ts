import { Application } from 'express';
import { Device } from './devices.model';
import { Database } from '../../core/database.interface';



export class DevicesController {
  constructor(app: Application, database: Database) {
    app.get('/api/devices', async (req, res) => {
      const devices = await database.readData<Device>('devices.json');
      res.send(devices);
    });
  }
}
