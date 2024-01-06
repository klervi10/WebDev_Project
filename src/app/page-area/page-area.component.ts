// Import necessary Angular modules and classes
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InfoIdMealService } from '../infoidmeal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meals } from '../meals';

// Component decorator with metadata
@Component({
  selector: 'app-page-area',
  templateUrl: './page-area.component.html',
  styleUrls: ['./page-area.component.css']
})
export class PageAreaComponent implements OnInit {
  meals: Meals[] = [];
  filteredMeals: Meals[] = [];
  selectedArea: string = '';
  areas: any[] = []; 
  filteredArea: any[] = [];

  constructor(private mealService: DataService, private router: Router, private route: ActivatedRoute, private infoidmeal:InfoIdMealService) {}
  
  country: string = ''; // Declare a variable to store the value of country

    ngOnInit(): void {
    // Subscribe to URL parameter changes
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Retrieving the country value from URL parameters
      this.country = params.get('country') || ''; // Use '' as default value if country is null
      // We can now use the value of this.country as required
      console.log('Country selected:', this.country);

      this.mealService.getMealsByAreaName(this.country).subscribe(meals => {
        this.meals = meals;
      });
    });

    this.loadMeals(this.country);

  }

  loadMeals(country: string): void {
    this.mealService.getMealsByAreaName(country).subscribe(meals => {
      this.meals = meals;
      this.filteredMeals = meals; // Reset filteredMeals with full unfiltered data
    });
  }
  
  SearchBarpageArea(filterValue: string): void {
    console.log('Filtering with:', filterValue);
  
    if (filterValue.trim() !== '') {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.name.toLowerCase().includes(filterValue.toLowerCase())
        //meal.name.toLowerCase().startsWith(filterValue.toLowerCase())
      );
    } else {
      this.filteredMeals = this.meals;
    }
  
    console.log('Filtered Meals:', this.filteredMeals);  //Add debugging logs to the SearchBarpageArea function to see if it is called and to check the search results.
  }


  onButtonClick(mealdescription: string): void {
    let id: number = parseInt(mealdescription, 10);
    console.log('You clicked on the button page area!', id);
    this.infoidmeal.setSelectedIdMeal(id);
    this.router.navigate(['/page-mealsdetails', id]); // Navigate to the new composant
  }
    
  }


