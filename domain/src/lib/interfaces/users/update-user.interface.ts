import { User } from "./user.interface";

export interface UpdateUser extends Omit<User, 'registeredDate'> {}