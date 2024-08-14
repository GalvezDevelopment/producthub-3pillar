import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { provideStore } from '@ngxs/store';
import { ProductState } from '../store/states/product.state';
import { SharedModule } from '../shared/shared.module';
import { AddEditProductComponent } from './components/add-edit-modal/add-edit-product.component';
import { CategoriesMockService } from '../categories/categories-mock.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent, AddEditProductComponent, SharedModule],
      providers: [
        provideStore([ProductState]),
        CategoriesMockService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
