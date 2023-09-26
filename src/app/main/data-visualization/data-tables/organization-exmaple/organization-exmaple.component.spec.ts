import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationExmapleComponent } from './organization-exmaple.component';

describe('OrganizationExmapleComponent', () => {
  let component: OrganizationExmapleComponent;
  let fixture: ComponentFixture<OrganizationExmapleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationExmapleComponent]
    });
    fixture = TestBed.createComponent(OrganizationExmapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
