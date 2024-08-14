import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideStore } from '@ngxs/store';
import { CoreState } from './store/states/core.state';
import { provideShared, SharedModule } from './shared/shared.module';
import { provideCore } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, SharedModule],
      providers: [
        provideCore(),
        provideShared(),
        provideStore([CoreState])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
