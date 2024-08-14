import { Injectable } from '@angular/core';
import { BaseService } from '../core/interfaces/services/base-service.interface';
import { Category } from '@producthub/domain';
import { Observable } from 'rxjs';
import { BaseResponse } from '../core/interfaces/api/base.response';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements BaseService<Category> {

  constructor() { }
  
  add<K extends Category>(category: K): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
  getById<K extends Category>(id: string): Observable<BaseResponse<K | null>> {
    throw new Error('Method not implemented.');
  }
  getAll<K extends Category>(): Observable<BaseResponse<K[]>> {
    throw new Error('Method not implemented.');
  }
  update<K extends Category>(category: K): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
}
