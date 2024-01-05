import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoAreaService {
  private selectedAreaSubject = new BehaviorSubject<string>(''); // BehaviorSubject to store the selected area
  selectedArea$ = this.selectedAreaSubject.asObservable();  // That subscribers to selectedArea$ can only receive notifications (values) and cannot modify the internal state of the BehaviorSubject.

  // Update the value of the area of the selected meal
  setSelectedArea(area: string): void {
    this.selectedAreaSubject.next(area);  // Uses the next method of the BehaviorSubject to emit this new value. All subscribers to the selectedArea$ Observable will be notified of this change.
  }
}