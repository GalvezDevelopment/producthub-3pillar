import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { BaseResponse } from '../core/interfaces/api/base.response';
import { AddProduct } from '../core/interfaces/products/add-product.interface';
import { Product } from '../core/interfaces/products/product.interface';
import { GetProduct } from '../core/interfaces/products/get-product.interface';
import { buildResponse } from '../utils/http-responses.utils';
import { genId } from '../utils/http-request.utils';
import { BaseServiceMock } from '../core/mock/base-service-mock.service';
import { UpdateProduct } from '../core/interfaces/products/update-product.interface';
import { Store } from '@ngxs/store';
import { ProductState } from '../store/states/product.state';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ProductsService extends BaseServiceMock<Product> {

  constructor(_store: Store, private _categoryService: CategoriesService) {
    super(_store);
    this.rehydrate(ProductState.products, 'products');
  }

  override add<K extends Product>(product: AddProduct): Observable<BaseResponse<null>> {
    const id = genId();
    const category = this._categoryService.getByIdSync(product.category.id);
    this._list.set(id, { ...product, id, category})
    return of(buildResponse(200, null)).pipe(delay(2000));
  }

  override getById<K extends Product>(productId: string): Observable<BaseResponse<K | null>> {
    const product = this._list.get(productId) ?? null;
    const status = product ? HttpStatusCode.Ok : HttpStatusCode.NotFound;
    return of(buildResponse(status, product as K)).pipe(delay(2000));
  }

  override getAll<GetProduct>(): Observable<BaseResponse<GetProduct[]>> {
    return of(
      buildResponse(200, Array.from(this._list.values()) as GetProduct[])
    ).pipe(delay(2000));
  }

  override update<K extends Product>(product: UpdateProduct): Observable<BaseResponse<null>> {
    this._list.set(product.id, product as K);
    return of(buildResponse(HttpStatusCode.Ok, null)).pipe(delay(2000));
  }

  override delete(productId: string): Observable<BaseResponse<null>> {
    const success = this._list.delete(productId);
    const status = success ? HttpStatusCode.Ok : HttpStatusCode.NotFound;
    return of(buildResponse(status, null)).pipe(delay(2000));
  }
}
