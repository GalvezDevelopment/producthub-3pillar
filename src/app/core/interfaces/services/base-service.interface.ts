import { Observable } from "rxjs";
import { BaseResponse } from "../api/base.response";

export interface BaseService<T> {
    add<K extends T>(category: K): Observable<BaseResponse<null>>;
    getById<K extends T>(id: string): Observable<BaseResponse<K | null>>;
    getAll<K extends T>(): Observable<BaseResponse<K[]>>;
    update<K extends T>(category: K): Observable<BaseResponse<null>>;
    delete(id: string): Observable<BaseResponse<null>>;
}