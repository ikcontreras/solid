import { ServerUp } from './factory/server';
import { UserController } from './api/user/user.controller';
import { MockDatabase } from './utils/JsonFileReader';
import { DevicesController } from './api/devices/devices.controller';
import { DevicesService } from './api/devices/devices.service';
import { UserServices } from './api/user/user.services';

const server = new ServerUp();

new UserController(server.app, new UserServices(MockDatabase));
new DevicesController(server.app, new DevicesService(MockDatabase));
