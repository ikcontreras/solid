import { ServerUp } from './factory/server';
import { createUserApi } from './api/user';
import { createDevicesApi } from './api/devices';

const server = new ServerUp();

createUserApi(server.app);
createDevicesApi(server.app);
