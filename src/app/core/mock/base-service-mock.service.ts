import { Injectable } from "@angular/core";
import { BaseService } from "../interfaces/services/base-service.interface";
import { Store } from "@ngxs/store";
import { filter, Observable, take } from "rxjs";
import { BaseResponse } from "../interfaces/api/base.response";

@Injectable()
export abstract class BaseServiceMock<T> implements BaseService<T> {
    protected _list = new Map<string, T>([]);

    constructor(protected store: Store) {}

    rehydrate(action: any, listPropName: string): void {
        this.store
        .select(action)
        .pipe(
          filter((i: any) => i && !!i[listPropName].length),
          take(2)
        )
        .subscribe({
          next: (data: any) => {
            this._list = new Map(data[listPropName].map((i: any) => [i.id, i]));
          },
        });
    }

    abstract add<K extends T>(category: K): Observable<BaseResponse<null>>;
    abstract getById<K extends T>(id: string): Observable<BaseResponse<K | null>>;
    abstract getAll<K extends T>(): Observable<BaseResponse<K[]>>;
    abstract update<K extends T>(category: K): Observable<BaseResponse<null>>;
    abstract delete(id: string): Observable<BaseResponse<null>>;
}