import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { provideShared, SharedModule } from '../shared/shared.module';
import { provideStore } from '@ngxs/store';
import { CoreState } from '../store/states/core.state';
import { provideCore } from '../core/core.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, SharedModule],
      providers: [
        provideStore([CoreState]),
        provideShared(),
        provideCore()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
