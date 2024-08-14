import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { DeleteProductAction, GetAllProductsAction, GetProductAction } from '../store/actions/product.actions';
import { ProductState } from '../store/states/product.state';
import { AddEditProductComponent } from './components/add-edit-modal/add-edit-product.component';
import { Product, ProductStateModel } from '@producthub/domain';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, AddEditProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<ProductStateModel>;
  product!: Product | null;

  constructor(private _store: Store, private _fb: FormBuilder) {
    this.products$ = this._store.select(ProductState.products);
  }

  ngOnInit(): void {
    this._store.dispatch(new GetAllProductsAction());
  }

  update(): void {
    this.product && this._store.dispatch(new GetProductAction(this.product.id));
    this.product = null;
  }

  delete(): void {
    this.product && this._store.dispatch(new DeleteProductAction(this.product.id));
    this.product = null;
  }
}
