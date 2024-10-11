import { Application } from 'express';
import { Device } from './devices.model';
import { DevicesService } from './devices.service';

export class DevicesController {
  app: Application;
  constructor(
    app: Application,
    private service: DevicesService
  ) {
    this.app = app;
    this.list();
  }

  list() {
    this.app.get('/api/devices', async (req, res) => {
      const devices = await this.service.list();
      res.send(devices);
    });
  }
}
