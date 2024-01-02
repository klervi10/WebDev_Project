import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoCategoryService {
  private selectedCategorySubject = new BehaviorSubject<string>(''); // BehaviorSubject pour stocker la category sélectionnée
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  setSelectedCategory(category: string): void {
    this.selectedCategorySubject.next(category);
  }
}