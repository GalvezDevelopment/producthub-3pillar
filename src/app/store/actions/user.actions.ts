import { AddUser } from "../../core/interfaces/users/add-user.interface";
import { UpdateUser } from "../../core/interfaces/users/update-user.interface";

export class AddUserAction {
    static type = '[User] Add';

    constructor(public user: AddUser) {}
}

export class GetUserAction {
    static type = '[User] Get';

    constructor(public userId: string) {}
}

export class GetAllUsersAction {
    static type = '[User] Get all';

    constructor() {}
}

export class UpdateUserAction {
    static type = '[User] Update';

    constructor(public user: UpdateUser) {}
}

export class DeleteUserAction {
    static type = '[User] Delete';

    constructor(public userId: string) {}
}