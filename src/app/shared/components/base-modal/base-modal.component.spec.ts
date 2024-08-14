import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalComponent } from './base-modal.component';
import { ConfirmationService } from 'primeng/api';
import { SharedModule } from '../../shared.module';

describe('BaseModalComponent', () => {
  let component: BaseModalComponent;
  let fixture: ComponentFixture<BaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseModalComponent],
      imports: [SharedModule],
      providers: [
        ConfirmationService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
