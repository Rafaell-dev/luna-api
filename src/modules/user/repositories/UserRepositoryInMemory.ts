import { User, UserSchema } from '../entities/User';
import { UserRepository } from './UserRepository';

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);

    if (!user) return null;

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    if (!user) return null;

    return user;
  }

  async updateById(id: string, user: User): Promise<User | null> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const userToUpdate = this.users[userIndex];
    this.users[userIndex] = new User({...userToUpdate, ...user, updatedAt: new Date()} as UserSchema, id);

    return this.users[userIndex];
  }
}
