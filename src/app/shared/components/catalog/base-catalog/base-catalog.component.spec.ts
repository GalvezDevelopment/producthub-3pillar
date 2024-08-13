import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCatalogComponent } from './base-catalog.component';

describe('BaseCatalogComponent', () => {
  let component: BaseCatalogComponent;
  let fixture: ComponentFixture<BaseCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseCatalogComponent]
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
