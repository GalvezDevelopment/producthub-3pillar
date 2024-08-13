export class SetTokenAction {
    static type = '[Token] Set';

    constructor(public token: string) {}
}

export class LoginAction {
    static type = '[Auth] Log in';
    constructor(public email: string, public password: string) {}
}

export class LogoutAction {
    static type = '[Auth] Log out';
    constructor() {}
}

export class SetLoadingAction {
    static type = '[Loader] Show';

    constructor(public show: boolean) {}
}