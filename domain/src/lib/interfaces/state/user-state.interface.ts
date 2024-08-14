import { User } from "../users";

export interface UserStateModel {
    users: User[];
    isLoading: boolean;
    userSelected: User | null;
}