import { inject } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { GetProduct } from '../../core/interfaces/products/get-product.interface';
import { ProductStateModel } from '../../core/interfaces/state/product-state.interface';
import { ProductsService } from '../../products/products.service';
import { SetLoadingAction } from '../actions/core.actions';
import {
  AddProductAction,
  DeleteProductAction,
  GetAllProductsAction,
  GetProductAction,
  UpdateProductAction,
} from '../actions/product.actions';

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    products: [],
    isLoading: false,
    selectedProduct: null,
  },
})
export class ProductState {
  private _store = inject(Store);
  private _productsService = inject(ProductsService);

  @Selector()
  static products(state: ProductStateModel) {
    return state;
  }

  @Selector()
  static showModal(state: ProductStateModel) {
    return state.selectedProduct;
  }

  @Action(AddProductAction)
  add(ctx: StateContext<ProductStateModel>, action: AddProductAction) {
    this._store.dispatch(new SetLoadingAction(true));
    this._productsService.add(action.product).subscribe({
      next: (response) => this._store.dispatch(GetAllProductsAction),
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(GetProductAction)
  getProduct(ctx: StateContext<ProductStateModel>, action: GetProductAction) {
    if (!action.productId) {
      ctx.patchState({ selectedProduct: null });
      return;
    }
    this._store.dispatch(new SetLoadingAction(false));
    this._productsService.getById(action.productId).subscribe({
      next: (response) => ctx.patchState({ selectedProduct: response.data }),
      error: () => this._store.dispatch(new SetLoadingAction(false)),
      complete: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(GetAllProductsAction)
  getAll(
    ctx: StateContext<ProductStateModel>,
    action: GetAllProductsAction
  ): void {
    this._store.dispatch(new SetLoadingAction(true));
    this._productsService.getAll().subscribe({
      next: (response) =>{
        ctx.patchState({
          isLoading: false,
          products: [...response.data] as GetProduct[],
        });
        this._store.dispatch(new SetLoadingAction(false));
      },
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(UpdateProductAction)
  update(ctx: StateContext<ProductStateModel>, action: UpdateProductAction) {
    this._store.dispatch(new SetLoadingAction(true));
    this._productsService.update(action.product).subscribe({
      next: () => {
        this._store.dispatch(new GetProductAction(''));
        this._store.dispatch(GetAllProductsAction);
      },
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(DeleteProductAction)
  delete(ctx: StateContext<ProductStateModel>, action: DeleteProductAction) {
    this._store.dispatch(new SetLoadingAction(true));
    this._productsService.delete(action.productId).subscribe({
      next: () => this._store.dispatch(GetAllProductsAction),
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }
}
