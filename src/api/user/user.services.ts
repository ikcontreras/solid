import { Database } from '../../core/database.interface';
import { User } from './user.model';

export class UserServices {
  constructor(private database: Database) {}

  async list() {
    return await this.database.readData<User>('users.json');
  }
}
