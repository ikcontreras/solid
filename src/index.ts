import { ServerUp } from './factory/server';
import { UserController } from './api/user/user.controller';
import { MockDatabase } from './utils/JsonFileReader';
import { DevicesController } from './api/devices/devices.controller';

const server = new ServerUp();

new UserController(server.app, MockDatabase)
new DevicesController(server.app, MockDatabase);

