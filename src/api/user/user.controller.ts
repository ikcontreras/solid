import { Application } from 'express';
import { UserServices } from './user.services';

export class UserController {
  constructor(
    private app: Application,
    private userService: UserServices
  ) {
    this.list();
  }

  list() {
    this.app.get('/api/users', async (req, res) => {
      const users = await this.userService.list();
      res.send(users);
    });
  }
}
