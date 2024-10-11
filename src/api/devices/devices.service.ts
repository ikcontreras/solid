import { Database } from '../../core/database.interface';
import { Device } from './devices.model';

export class DevicesService {
  constructor(private database: Database) {}

  async list() {
    return await this.database.readData<Device>('devices.json');
  }
}
