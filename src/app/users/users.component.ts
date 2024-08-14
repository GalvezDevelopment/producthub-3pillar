import { DeleteUserAction, GetUserAction } from './../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { GetAllUsersAction } from '../store/actions/user.actions';
import { UserState } from '../store/states/user.state';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { User, UserStateModel } from '@producthub/domain';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule, AddEditUserComponent],
  providers: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users$: Observable<UserStateModel>;
  user!: User | null;

  constructor(private _store: Store) {
    this.users$ = _store.select(UserState.list);
   }

   ngOnInit(): void {
    this._store.dispatch(new GetAllUsersAction());
   }

   update(): void {
    this.user && this._store.dispatch(new GetUserAction(this.user.id));
    this.user = null;
   }

   delete(): void {
    this.user && this._store.dispatch(new DeleteUserAction(this.user.id));
    this.user = null;
   }
}
