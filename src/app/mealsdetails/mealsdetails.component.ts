// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InfoIdMealService } from '../infoidmeal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MealDetails } from '../meal-details';

// Component decorator with metadata
@Component({
  selector: 'app-mealsdetails',
  templateUrl: './mealsdetails.component.html',
  styleUrls: ['./mealsdetails.component.css']
})

export class MealsdetailsComponent implements OnInit {
  // Array to store all meals and meals categories
  meals: MealDetails[] = [];
  filteredMeals: any[] = [];

  constructor(private mealService: DataService, private router: Router, private route: ActivatedRoute, private infoidmeal: InfoIdMealService) {}
  
  id: number=0; // Declare a variable to store the value of the id

  // Function for retrieving and formatting the ingredients and measurements associated with a meal
  get ingredientsAndMeasures(): string[] {
    const result: string[] = [];

    for (let i = 0; i < Math.max(this.meals[0]?.ingredients.length, this.meals[0]?.measures.length); i++) {
      const ingredient = this.meals[0]?.ingredients[i] || '';
      const measure = this.meals[0]?.measures[i] || '';

      if (ingredient && measure) {
        result.push(`${ingredient}: ${measure}`);
      }
    }

    return result;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Retrieve the id value from the URL parameters and convert to a number
      const idFromParams = params.get('id');
      this.id = idFromParams ? parseInt(idFromParams, 10) : 0; // Use 0 as default value if id is null
      // We can now use the value of this.id as required
      console.log('id sélectionnée:', this.id);
    });

      // Call the service with the extracted ID
    this.mealService.getMealDetails(this.id).subscribe(meals => {
      this.meals = meals;
    });
    };
  }


