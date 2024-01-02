import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsdetailsComponent } from './mealsdetails.component';

describe('MealsdetailsComponent', () => {
  let component: MealsdetailsComponent;
  let fixture: ComponentFixture<MealsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealsdetailsComponent]
    });
    fixture = TestBed.createComponent(MealsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
