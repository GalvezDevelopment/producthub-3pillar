import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideStore } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { UserState } from '../store/states/user.state';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { UsersComponent } from './users.component';
import { UsersMockService } from './users-mock.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent, AddEditUserComponent, SharedModule],
      providers: [
        provideStore([UserState]),
        UsersMockService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
