import { User } from '../../domain/user';
import { UserRepository } from './../../domain/userRepository';
export class UserRepositoryImpl implements UserRepository {
    Login(user: User): [token: string, error: Error] {
        throw new Error('Method not implemented.');
    }
    Register(user: User): [token: string, error: Error] {
        throw new Error('Method not implemented.');
    }
    
}