
// Import necessary Angular modules and classes
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { Meals } from './meals';
import { Area } from './area';
import { Categories } from './Categories';
import { MealDetails } from './meal-details';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  // Retrieves meals from the MealDB API based on a search query
  getMeals(search: string): Observable<Meals[]> {
    return this.httpClient
      .get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s').pipe(   // Sends an HTTP GET request to the MealDB API to search for meals, the .pipe() function is used to chain RxJS operators on the Observable returned by the HTTP request
        filter((data: any) => data.strMealThumb == null), // We tried to filter the dishes because one of them don't have informations or photo, but it hasn't worked.
        map((data: any) => data.meals),   // This operator extracts the 'meals' array from the API response
        map((data: any[]) => {   // This operator maps the array of meals into an array of objects with a structure defined by the Meals type.
          const res: Meals[] = [];
          for (let i = 0; i < data.length; i++) {
            res.push({
              name: data[i].strMeal,
              img: data[i].strMealThumb,
              description: data[i].strInstructions,
            });
          }
          return res;  // The end result is an Observable containing an array of Meals that can be subscribed to and used in the application
        })
      );
  }

  // Retrieve meals based on a specific geographical area from the MealDB API
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
          console.log('Appel de getMealsByAreaName avec area:', search);  // Display debugging messages in the console
          return res;
        })
      );
  }

  // Retrieve meals according to a specific category from the MealDB API
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

  // Retrieve the list of meal categories from the MealDB API
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

  // Retrieve the list of geographical zones from the MealDB API
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

  // Retrieve details of a specific meal from the MealDB API
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

  // Extract the ingredients of a specific meal
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

  // Extract the measures of a specific meal
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

  // Takes as parameter a numerical index representing a month (from 0 to 11) and returns the name of the corresponding month
  getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December',
    ];
    return months[monthIndex];
  }

  // Takes as a parameter a numerical index representing a day of the week (from 0 to 6, where 0 is Sunday and 6 is Saturday) and returns the name of the corresponding day of the week
  getDayOfWeek(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
}
