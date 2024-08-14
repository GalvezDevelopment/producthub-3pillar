import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCatalogComponent } from './base-catalog.component';
import { SharedModule } from '../../../shared.module';
import { ConfirmationService } from 'primeng/api';

describe('BaseCatalogComponent', () => {
  let component: BaseCatalogComponent;
  let fixture: ComponentFixture<BaseCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseCatalogComponent],
      providers: [ConfirmationService],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
