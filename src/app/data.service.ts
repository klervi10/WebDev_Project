import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Meals } from './meals';
import { Area } from './area';
import { Categories } from './Categories';
import { MealDetails } from './meal-details';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getMeals(search: string): Observable<Meals[]> {
    return this.httpClient
      .get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s').pipe(
        map((data: any) => data.meals),
        map((data: any[]) => {
          const res: Meals[] = [];
          for (let i = 0; i < data.length; i++) {
            res.push({
              name: data[i].strMeal,
              img: data[i].strMealThumb,
              description: data[i].strInstructions,
            });
          }
          return res;
        })
      );
  }

  getMealsByAreaName(search: string): Observable<Meals[]> {
    return this.httpClient
      .get<any>('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + search).pipe(
        map((data: any) => data.meals),
        map((data: any[]) => {
          const res: Meals[] = [];
          for (let i = 0; i < data.length; i++) {
            console.log('dans le forAppel de getMealsByAreaName avec area:', search);
            res.push({
              name: data[i].strMeal,
              img: data[i].strMealThumb,
              description: data[i].idMeal,
            });
          }
          console.log('Appel de getMealsByAreaName avec area:', search);
          return res;
        })
      );
  }

  getMealsByCategoryName(search: string): Observable<Meals[]> {
    return this.httpClient
      .get<any>('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + search).pipe(
        map((data: any) => data.meals),
        map((data: any[]) => {
          const res: Meals[] = [];
          for (let i = 0; i < data.length; i++) {
            console.log('dans le forAppel de getMealsByCategoryName avec category:', search);
            res.push({
              name: data[i].strMeal,
              img: data[i].strMealThumb,
              description: data[i].idMeal,
            });
          }
          console.log('Appel de getMealsByCategoryName avec category:', search);
          return res;
        })
      );
  }

  getCategories(): Observable<Categories[]> {
    return this.httpClient
      .get<any>('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .pipe(
        map((data: any) => data.meals),
        map((data: any[]) => {
          const res: Categories[] = [];
          for (let i = 0; i < data.length; i++) {
            res.push({
              name: data[i].strCategory,
              imageSrc: `assets/${data[i].strCategory}/${data[i].strCategory}.png`,
              buttonLabel: `See all ${data[i].strCategory} recipes`,  // Ajoutez la propriété buttonLabel
            });
          }
          return res;
        })
      );
  }

  getAreas(): Observable<Area[]> {
    return this.httpClient
      .get<any>('https://www.themealdb.com/api/json/v1/1/list.php?a=list').pipe(
        map((data: any) => data.meals),
        map((data: any[]) => {
          const res: Area[] = [];
          for (let i = 0; i < data.length; i++) {
            res.push({
              name: data[i].strArea,
              imageSrc: `assets/${data[i].strArea}/${data[i].strArea}.png`,
              buttonLabel: `See all ${data[i].strArea} recipes`,  // Ajoutez la propriété buttonLabel
            });
          }
          return res;
        })
      );
  }

  getMealDetails(search: number): Observable<MealDetails[]> {
    return this.httpClient
    .get<any>('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+search).pipe(
      map((data: any) => data.meals),
        map((data: any[]) => {
          const res: MealDetails[] = [];
          for (let i = 0; i < data.length; i++) {
            res.push({
              name: data[i].strMeal,
              img: data[i].strMealThumb,
              description: data[i].strInstructions,
              ingredients: this.extractIngredients(data[i]),
              measures: this.extractMeasures(data[i])
            });
          }
          return res;
        })
    );
  }

  private extractIngredients(meal: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal['strIngredient' + i];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }

  private extractMeasures(meal: any): string[] {
    const measures: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const measure = meal['strMeasure' + i];
      if (measure && measure.trim() !== '') {
        measures.push(measure);
      }
    }
    return measures;
  }

  getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December',
    ];
    return months[monthIndex];
  }

  getDayOfWeek(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
}
