// home.component.ts

// Import necessary Angular module
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// Component decorator with metadata
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  meals: any[] = [];
  filteredMeals: any[] = [];

  currentDate: Date = new Date();
  currentMonth!: string;
  currentDay!: string;

  // Constructor with dependency injection
  constructor(private mealService: DataService) {}

  // Lifecycle hook - called after the component is initialized
  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentMonth = this.mealService.getMonthName(this.currentDate.getMonth());
    this.currentDay = this.mealService.getDayOfWeek(this.currentDate.getDay());

    // Load meals data
    this.loadMeals();
  }

  // Method to filter meals based on search bar input
  SearchBar(filterMeal: string): void {
    if (filterMeal.trim() !== '') {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.name.toLowerCase().includes(filterMeal.toLowerCase())
      );
    } else {
      this.filteredMeals = this.meals;
    }
  }

  // Method to load meals from the data service
  loadMeals(): void {
    this.mealService.getMeals('').subscribe((data) => {
      this.meals = data;
      this.filteredMeals = data;
    });
  }
}
