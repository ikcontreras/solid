import { Application } from 'express';
import { DevicesService } from './devices.service';

export class DevicesController {
  constructor(
    private app: Application,
    private service: DevicesService
  ) {
    this.list();
  }

  list() {
    this.app.get('/api/devices', async (req, res) => {
      const devices = await this.service.list();
      res.send(devices);
    });
  }
}
