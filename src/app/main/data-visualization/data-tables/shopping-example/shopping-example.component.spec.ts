import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingExampleComponent } from './shopping-example.component';

describe('ShoppingExampleComponent', () => {
  let component: ShoppingExampleComponent;
  let fixture: ComponentFixture<ShoppingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingExampleComponent]
    });
    fixture = TestBed.createComponent(ShoppingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
