import { User } from '../entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract updateById(id: string, user: Partial<User>): Promise<User | null>;
}
