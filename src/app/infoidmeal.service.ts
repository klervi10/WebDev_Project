import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoIdMealService {
  private selectedIdMealSubject = new BehaviorSubject<number>(0); // BehaviorSubject pour stocker l'id sélectionné
  selectedIdMeal$ = this.selectedIdMealSubject.asObservable();

  setSelectedIdMeal(id: number): void {
    this.selectedIdMealSubject.next(id);
  }
}