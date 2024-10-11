import { Application } from 'express';
import { Database } from '../utils/JsonFileReader';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  is_active: boolean;
}

export function createUserApi(app: Application) {
  app.get('/api/users', async (req, res) => {
    const users = await Database.readData<User>('users.json');

    res.send(users);
  });
}
