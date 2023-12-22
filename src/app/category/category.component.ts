// category.component.ts

// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Categories } from '../Categories';
import { Router } from '@angular/router';

// Component decorator with metadata
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // Array to store all categories and filtered categories
  categories: any[] = [];
  filteredCategory: any[] = [];

  // Constructor with dependency injection
  constructor(private mealService: DataService, private router: Router) {}

  // Lifecycle hook - called after the component is initialized
  ngOnInit(): void {
    this.loadCategories();
  }

  // Method to filter categories based on search bar input
  SearchBarCat(filterValue: string): void {
    if (filterValue.trim() !== '') {
      this.filteredCategory = this.categories.filter((category) =>
        category.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      this.filteredCategory = this.categories;
    }
  }

  // Method to load categories from the data service
  loadCategories(): void {
    this.mealService.getCategories().subscribe((data: any) => {
      this.categories = data;
      this.filteredCategory = data;
    });
  }

  // Method to handle button click and navigate to a new component
  onClick(category: Categories) {
    console.log('You clicked on the button!');
    this.router.navigate(['/american-recipe']); // Navigate to the new component
  }
}
