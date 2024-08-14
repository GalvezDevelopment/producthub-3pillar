import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoaderComponent } from './custom-loader.component';
import { provideStore } from '@ngxs/store';
import { CoreState } from '../../../store/states/core.state';
import { provideCore } from '../../../core/core.module';
import { provideShared, SharedModule } from '../../shared.module';

describe('CustomLoaderComponent', () => {
  let component: CustomLoaderComponent;
  let fixture: ComponentFixture<CustomLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomLoaderComponent],
      imports: [SharedModule],
      providers: [
        provideStore([CoreState]),
        provideCore(),
        provideShared()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
