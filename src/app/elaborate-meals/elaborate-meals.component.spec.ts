import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaborateMealsComponent } from './elaborate-meals.component';

describe('ElaborateMealsComponent', () => {
  let component: ElaborateMealsComponent;
  let fixture: ComponentFixture<ElaborateMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElaborateMealsComponent]
    });
    fixture = TestBed.createComponent(ElaborateMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
