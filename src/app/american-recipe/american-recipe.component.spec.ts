import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanRecipeComponent } from './american-recipe.component';

describe('AmericanRecipeComponent', () => {
  let component: AmericanRecipeComponent;
  let fixture: ComponentFixture<AmericanRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmericanRecipeComponent]
    });
    fixture = TestBed.createComponent(AmericanRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
