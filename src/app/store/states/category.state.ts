import { inject } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { GetCategory } from '../../core/interfaces/categories/get-category.interface';
import { CategoryStateModel } from '../../core/interfaces/state/category-state.interface';
import {
  AddCategoryAction,
  DeleteCategoryAction,
  GetAllCategoriesAction,
  GetCategoryAction,
  UpdateCategoryAction,
} from '../actions/category.actions';
import { CategoriesService } from './../../categories/categories.service';
import { SetLoadingAction } from '../actions/core.actions';

@State<CategoryStateModel>({
  name: 'category',
  defaults: {
    categories: [],
    isLoading: false,
    categorySelected: null,
  },
})
export class CategoryState {
  private _store = inject(Store);
  private _categoryService = inject(CategoriesService);

  @Selector()
  static categories(state: CategoryStateModel) {
    return state;
  }

  @Selector()
  static showModal(state: CategoryStateModel) {
    return state.categorySelected;
  }

  @Action(AddCategoryAction)
  addCategory(
    ctx: StateContext<CategoryStateModel>,
    action: AddCategoryAction
  ) {
    this._store.dispatch(new SetLoadingAction(true));
    this._categoryService.add(action.category).subscribe({
      next: () => {
        this._store.dispatch(GetAllCategoriesAction);
      },
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(GetAllCategoriesAction)
  getAllCategory(
    ctx: StateContext<CategoryStateModel>,
    action: GetAllCategoriesAction
  ) {
    this._store.dispatch(new SetLoadingAction(true));
    this._categoryService.getAll<GetCategory>().subscribe({
      next: (response) => {
        ctx.patchState({ categories: [...response.data] });
        this._store.dispatch(new SetLoadingAction(false));
      },
      error: () => this._store.dispatch(new SetLoadingAction(false))
    });
  }

  @Action(GetCategoryAction)
  get(ctx: StateContext<CategoryStateModel>, action: GetCategoryAction) {
    if (!action.id) {
      ctx.patchState({ categorySelected: null });
      return;
    }
    this._store.dispatch(new SetLoadingAction(true));
    this._categoryService.getById(action.id).subscribe({
      next: (response) => {
        ctx.patchState({ categorySelected: response.data });
        this._store.dispatch(new SetLoadingAction(false));
      },
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(DeleteCategoryAction)
  delete(ctx: StateContext<CategoryStateModel>, action: DeleteCategoryAction) {
    this._store.dispatch(new SetLoadingAction(true));
    this._categoryService.delete(action.categoryId).subscribe({
      next: (response) => {
        this._store.dispatch(GetAllCategoriesAction);
      },
      error: () => this._store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(UpdateCategoryAction)
  update(ctx: StateContext<CategoryStateModel>, action: UpdateCategoryAction) {
    this._store.dispatch(new SetLoadingAction(true));
    this._categoryService.update(action.category).subscribe({
      next: (response) => {
        ctx.patchState({ categorySelected: null });
        this._store.dispatch(GetAllCategoriesAction);
      },
      error: () => this._store.dispatch(new SetLoadingAction(false))
    })
  }
}
