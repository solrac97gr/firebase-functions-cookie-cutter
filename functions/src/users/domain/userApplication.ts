import { UserRepository } from './userRepository';
import { User } from './user';

export interface UserApplication {
    repository:UserRepository
    Login(user:User):[token:string,error:Error]
    Register(user:User):[token:string,error:Error]
}