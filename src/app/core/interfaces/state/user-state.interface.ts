import { User } from "../users/user.interface";

export interface UserStateModel {
    users: User[];
    isLoading: boolean;
    userSelected: User | null;
}