import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoAreaService {
  private selectedAreaSubject = new BehaviorSubject<string>(''); // BehaviorSubject pour stocker l'area sélectionnée
  selectedArea$ = this.selectedAreaSubject.asObservable();

  setSelectedArea(area: string): void {
    this.selectedAreaSubject.next(area);
  }
}