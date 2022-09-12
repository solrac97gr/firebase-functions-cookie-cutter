import { User } from './user';

export interface UserRepository {
    Login(user:User):[token:string,error:Error]
    Register(user:User):[token:string,error:Error]
}