import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAndGraphsComponent } from './charts-and-graphs.component';

describe('ChartsAndGraphsComponent', () => {
  let component: ChartsAndGraphsComponent;
  let fixture: ComponentFixture<ChartsAndGraphsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsAndGraphsComponent]
    });
    fixture = TestBed.createComponent(ChartsAndGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
