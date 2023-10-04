import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHeaderComponent } from './skills-header.component';

describe('SkillsHeaderComponent', () => {
  let component: SkillsHeaderComponent;
  let fixture: ComponentFixture<SkillsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsHeaderComponent]
    });
    fixture = TestBed.createComponent(SkillsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
