import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { SharedModule } from '../shared/shared.module';
import { provideStore } from '@ngxs/store';
import { CategoryState } from '../store/states/category.state';
import { CategoriesMockService } from './categories-mock.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesComponent, AddEditCategoryComponent, SharedModule],
      providers: [
        provideStore([CategoryState]),
        CategoriesMockService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
