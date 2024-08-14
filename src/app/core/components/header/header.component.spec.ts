import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter, RouterModule } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { provideShared } from '../../../shared/shared.module';
import { CoreState } from '../../../store/states/core.state';
import { provideCore } from '../../core.module';
import { HeaderComponent } from './header.component';
import { MenuModule } from 'primeng/menu';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        MenubarModule,
        ButtonModule,
        RouterModule,
        ImageModule,
        MenuModule
      ],
      providers: [provideCore(), provideShared(), provideStore([CoreState]), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
