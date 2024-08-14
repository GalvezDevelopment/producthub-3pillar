import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { delay, Observable, of } from 'rxjs';
import { BaseResponse } from '../core/interfaces/api/base.response';
import { BaseServiceMock } from '../core/mock/base-service-mock.service';
import { genId } from '../utils/http-request.utils';
import { buildResponse } from '../utils/http-responses.utils';
import { CategoryState } from '../store/states/category.state';
import { AddCategory, Category, GetCategory } from '@producthub/domain';

@Injectable({
  providedIn: 'root'
})
export class CategoriesMockService extends BaseServiceMock<Category> {
  constructor(_store: Store) {
    super(_store);
    this.rehydrate(CategoryState.categories, 'categories');
  }

  add<K extends Category>(
    category: AddCategory
  ): Observable<BaseResponse<null>> {
    const id = genId();
    this._list.set(id, { ...category, id });
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }
  getById<K extends Category>(id: string): Observable<BaseResponse<K | null>> {
    const category = this._list.get(id);
    return of(buildResponse(HttpStatusCode.Ok, category as K)).pipe(delay(2000));
  }
  getAll<K extends Category>(): Observable<BaseResponse<K[]>> {
    const list: GetCategory[] = Array.from(this._list.values());
    return of(buildResponse(HttpStatusCode.Ok, list as K[])).pipe(delay(2000));
  }
  update<K extends Category>(category: K): Observable<BaseResponse<null>> {
    const categoryUpdate = this._list.get(category.id);
    const newCategory = { ...categoryUpdate, ...category };
    this._list.set(category.id, newCategory);
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }
  delete(id: string): Observable<BaseResponse<null>> {
    this._list.has(id) && this._list.delete(id);
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }

  getByIdSync(categoryId: string): Category {
    return this._list.get(categoryId) as Category;
  }
}
