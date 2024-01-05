import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoCategoryService {
  private selectedCategorySubject = new BehaviorSubject<string>(''); // BehaviorSubject to store the selected category
  selectedCategory$ = this.selectedCategorySubject.asObservable();  // That subscribers to selectedCategory$ can only receive notifications (values) and cannot modify the internal state of the BehaviorSubject.

  // Update the value of the category of the selected meal
  setSelectedCategory(category: string): void {
    this.selectedCategorySubject.next(category);  // Uses the next method of the BehaviorSubject to emit this new value. All subscribers to the selectedCategory$ Observable will be notified of this change.
  }
}