import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InfoIdMealService } from '../infoidmeal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meals } from '../meals';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit {
  meals: Meals[] = [];
  filteredMeals: any[] = [];
  selectedCategory: string = '';

  constructor(private mealService: DataService, private router: Router, private route: ActivatedRoute, private infoidmeal: InfoIdMealService) {}
  
  category: string = ''; // Declare a variable to store the value of category
    ngOnInit(): void {
// Subscribe to URL parameter changes
    this.route.paramMap.subscribe((params: ParamMap) => {
// Retrieving the country value from the URL parameters
      this.category = params.get('category') || ''; // Use '' as default value if category is null
      // We can now use the value of this.category as required
      console.log('Category selected:', this.category);

      this.mealService.getMealsByCategoryName(this.category).subscribe(meals => {
        this.meals = meals;
      });
    });

    this.loadMeals(this.category);

  }

  loadMeals(category: string): void {
    this.mealService.getMealsByCategoryName(category).subscribe(meals => {
      this.meals = meals;
      this.filteredMeals = meals; // Reset filteredMeals with full unfiltered data
    });
  }
  
  SearchBarpageCategory(filterValue: string): void {
    console.log('Filtering with:', filterValue);
  
    if (filterValue.trim() !== '') {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.name.toLowerCase().includes(filterValue.toLowerCase())
        //meal.name.toLowerCase().startsWith(filterValue.toLowerCase())
        //we decided to use the first method (with includes) because we saw it in class and was better adapted for our subject
      );
    } else {
      this.filteredMeals = this.meals;
    }
  
    console.log('Filtered Meals:', this.filteredMeals); //Add debugging logs to the SearchBarpageArea function to see if it is called and to check the search results.
  }

  onButtonClick(mealdescription: string): void { // Function triggered on button click, takes a meal description as a string parameter

    let id: number = parseInt(mealdescription, 10); // Analyse the meal description string to extract an integer ID
    console.log('You clicked on the button page category!', id); // Log a message indicating that the button for a specific category is clicked, along with the extracted ID

    this.infoidmeal.setSelectedIdMeal(id);  // Set the selected meal ID using the infoidmeal service or component
    this.router.navigate(['/page-mealsdetails', id]); // Navigate to a new component/page for meal details using Angular router

  }

  }


