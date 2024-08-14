import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared.module';
import { BaseTableComponent } from './base-table.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mocked-container',
  template: ` <app-base-table [values]="data" [rows]="rows" [columns]="columns" [isLoading]="false">
    <ng-template #columns>
      <th>MockedColumn</th>
    </ng-template>
    <ng-template #rows let-item="product">
      <td>Mocked value</td>
    </ng-template>
  </app-base-table> `,
})
class MockedContainerComponent {
  data = [];
}

describe('BaseTableComponent', () => {
  let component: MockedContainerComponent;
  let fixture: ComponentFixture<MockedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockedContainerComponent, BaseTableComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MockedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
