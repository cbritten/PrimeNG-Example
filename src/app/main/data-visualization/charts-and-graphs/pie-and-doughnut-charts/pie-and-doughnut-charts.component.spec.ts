import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAndDoughnutChartsComponent } from './pie-and-doughnut-charts.component';

describe('PieAndDoughnutChartsComponent', () => {
  let component: PieAndDoughnutChartsComponent;
  let fixture: ComponentFixture<PieAndDoughnutChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieAndDoughnutChartsComponent]
    });
    fixture = TestBed.createComponent(PieAndDoughnutChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
