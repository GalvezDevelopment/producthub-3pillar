import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetCategory } from '../core/interfaces/categories/get-category.interface';
import { CategoryState } from '../store/states/category.state';
import { CategoryStateModel } from '../core/interfaces/state/category-state.interface';
import { DeleteCategoryAction, GetAllCategoriesAction, GetCategoryAction } from '../store/actions/category.actions';
import { Category } from '../core/interfaces/categories/category.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule, AddEditCategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<CategoryStateModel>;
  category!: Category | null;

  constructor(private _store: Store) {
    this.categories$ = _store.select(CategoryState.categories)
  }

  ngOnInit(): void {
    this._store.dispatch(new GetAllCategoriesAction())
  }

  update(): void {
    this.category && this._store.dispatch(new GetCategoryAction(this.category.id));
    this.category = null;
  }

  delete(): void {
    this.category && this._store.dispatch(new DeleteCategoryAction(this.category.id));
    this.category = null;
  }
}
