import { UserRepository } from './../domain/userRepository';
import { User } from '../domain/user';
import { UserApplication } from './../domain/userApplication';

export class UserApplicationImpl implements UserApplication {
    
    repository:UserRepository;

    constructor(repository:UserRepository){
        this.repository = repository
    }

    Login(user: User): [token: string, error: Error] {
        throw new Error('Method not implemented.');
    }
    Register(user: User): [token: string, error: Error] {
        throw new Error('Method not implemented.');
    }

}