import {
  UpdateUserAction,
  DeleteUserAction,
  GetUserAction,
} from './../actions/user.actions';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { UserStateModel } from '../../core/interfaces/state/user-state.interface';
import { inject } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { AddUserAction, GetAllUsersAction } from '../actions/user.actions';
import { SetLoadingAction } from '../actions/core.actions';

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: [],
    isLoading: false,
    userSelected: null,
  },
})
export class UserState {
  protected store = inject(Store);
  protected usersService = inject(UsersService);

  @Selector()
  static list(state: UserStateModel) {
    return state;
  }

  @Selector()
  static showModal(state: UserStateModel) {
    return state.userSelected;
  }

  @Action(GetAllUsersAction)
  getAll(ctx: StateContext<UserStateModel>, action: GetAllUsersAction) {
    this.store.dispatch(new SetLoadingAction(true));
    this.usersService.getAll().subscribe({
      next: (response) => {
        ctx.patchState({ users: [...response.data], isLoading: false });
        this.store.dispatch(new SetLoadingAction(false));
      },
      error: () => ctx.patchState({ isLoading: false }),
    });
  }

  @Action(AddUserAction)
  add(ctx: StateContext<UserStateModel>, action: AddUserAction) {
    this.store.dispatch(new SetLoadingAction(true));
    this.usersService.add(action.user).subscribe({
      next: (response) => {
        this.store.dispatch(GetAllUsersAction);
      },
      error: () => this.store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(GetUserAction)
  getUser(ctx: StateContext<UserStateModel>, action: GetUserAction) {
    if (!action.userId) {
      ctx.patchState({ userSelected: null });
      return;
    }
    this.store.dispatch(new SetLoadingAction(true));
    this.usersService.getById(action.userId).subscribe({
      next: (response) => {
        ctx.patchState({ isLoading: false, userSelected: response.data });
        this.store.dispatch(new SetLoadingAction(false));
      },
      error: () => this.store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(UpdateUserAction)
  update(ctx: StateContext<UserStateModel>, action: UpdateUserAction) {
    this.store.dispatch(new SetLoadingAction(true));
    this.usersService.update(action.user).subscribe({
      next: (response) => {
        this.store.dispatch(GetAllUsersAction);
        ctx.patchState({ userSelected: null });
      },
      error: () => this.store.dispatch(new SetLoadingAction(false)),
    });
  }

  @Action(DeleteUserAction)
  delete(ctx: StateContext<UserStateModel>, action: DeleteUserAction) {
    ctx.patchState({ isLoading: true });
    this.usersService.delete(action.userId).subscribe({
      next: (response) => this.store.dispatch(GetAllUsersAction),
      error: () => this.store.dispatch(new SetLoadingAction(false)),
    });
  }
}
