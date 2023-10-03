import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesCardsComponent } from './features-cards.component';

describe('FeaturesCardsComponent', () => {
  let component: FeaturesCardsComponent;
  let fixture: ComponentFixture<FeaturesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesCardsComponent]
    });
    fixture = TestBed.createComponent(FeaturesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
