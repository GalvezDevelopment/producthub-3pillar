import { Observable } from "rxjs";
import { BaseResponse } from "../api/base.response";

export interface BaseAuth {
    login(email: string, password: string): Observable<BaseResponse<string | null>>;
    logout(): Observable<BaseResponse<null>>;
}