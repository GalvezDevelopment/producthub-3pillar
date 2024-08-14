import { Injectable } from '@angular/core';
import { BaseService } from '../core/interfaces/services/base-service.interface';
import { Product } from '@producthub/domain';
import { Observable } from 'rxjs';
import { BaseResponse } from '../core/interfaces/api/base.response';

@Injectable()
export class ProductsService implements BaseService<Product> {

  constructor() { }

  add<K extends Product>(category: K): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
  getById<K extends Product>(id: string): Observable<BaseResponse<K | null>> {
    throw new Error('Method not implemented.');
  }
  getAll<K extends Product>(): Observable<BaseResponse<K[]>> {
    throw new Error('Method not implemented.');
  }
  update<K extends Product>(category: K): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<BaseResponse<null>> {
    throw new Error('Method not implemented.');
  }
}
