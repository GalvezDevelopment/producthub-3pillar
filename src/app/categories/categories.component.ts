import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CategoryState } from '../store/states/category.state';
import { DeleteCategoryAction, GetAllCategoriesAction, GetCategoryAction } from '../store/actions/category.actions';
import { Category, CategoryStateModel } from '@producthub/domain';

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
