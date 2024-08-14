import { User } from "./user.interface";

export interface AuthCredential extends Pick<User, 'email' | 'password'> {}