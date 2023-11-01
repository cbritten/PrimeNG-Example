import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebDriver, by, browser, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { HomePageComponent } from 'src/app/main/home/home-page/home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
