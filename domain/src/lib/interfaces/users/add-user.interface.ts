import { User } from "./user.interface";

export interface AddUser extends Omit<User, 'id' | 'registeredOn'> {

}