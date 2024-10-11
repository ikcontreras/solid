import { Application } from 'express';
import { User } from './user.model';
import { Database } from '../../core/database.interface';

export class UserController {
  constructor(app: Application, private database: Database) {
    app.get('/api/users', async (req, res) => {
      const users = await database.readData<User>('users.json');
      
      res.send(users);
    });
  }
}
