import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoIdMealService {
  private selectedIdMealSubject = new BehaviorSubject<number>(0); // BehaviorSubject to store the selected id
  selectedIdMeal$ = this.selectedIdMealSubject.asObservable();  // That subscribers to selectedIdMeal$ can only receive notifications (values) and cannot modify the internal state of the BehaviorSubject.

  // Update the value of the identifier of the selected meal
  setSelectedIdMeal(id: number): void { 
    this.selectedIdMealSubject.next(id);  // Uses the next method of the BehaviorSubject to emit this new value. All subscribers to the selectedIdMeal$ Observable will be notified of this change.
  }
}