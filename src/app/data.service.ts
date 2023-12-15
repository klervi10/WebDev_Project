import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { Meals } from './meals';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {}

  getMeals(): Observable<Meals[]> {
    return this.httpClient.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s').pipe(
      map((data: any) => data.meals),
      map((data: any[]) => {
        const res: Meals[] = [];
        for (let i = 0; i < data.length; i++) {
          res.push({
            name: data[i].strMeal,
            description: data[i].strInstructions,
            img: data[i].strMealThumb,
          });
        }
        return res;
      }),
    );
  }


  getCategories(): Observable<any> {
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }


  //loadRandomMeal() {
  //  return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  //}

  
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
  }​
}


