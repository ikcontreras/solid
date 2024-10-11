import { Application } from 'express';
import { User } from './user.model';
import { Database } from '../../core/database.interface';
import { UserServices } from './user.services';

export class UserController {
  app: Application;
  constructor(
    app: Application,
    private userService: UserServices
  ) {
    this.app = app;
    this.list();
  }

  list() {
    this.app.get('/api/users', async (req, res) => {
      const users = await this.userService.list();
      res.send(users);
    });
  }
}
