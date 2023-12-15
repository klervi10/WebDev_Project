import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  
  getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  }
  
  getDayOfWeek(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
  
  loadRandomMeal() {
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/random.php')

  }​
}


