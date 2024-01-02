// category.component.ts

// Import necessary Angular modules and services
import { Component, OnInit, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { DataService } from '../data.service'; 
import { Router } from '@angular/router';
import { Categories } from '../Categories';
import { PageCategoryComponent } from '../page-category/page-category.component';
import { InfoAreaService } from '../infoarea.service';

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
  constructor(private mealService: DataService, private router: Router, private infoAreaService: InfoAreaService, private elementRef: ElementRef, private ngZone: NgZone, private renderer: Renderer2) {}

  // Lifecycle hook - called after the component is initialized
  ngOnInit(): void {
    this.loadCategories();
  }

  // Method to filter categories based on search bar input
  SearchBarCat(filterValue: string): void {
    if (filterValue.trim() !== '') {
      this.filteredCategory = this.categories.filter((category) =>
        category.name.toLowerCase().includes(filterValue.toLowerCase())
        //category.name.toLowerCase().startsWith(filterValue.toLowerCase())
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
  onClick(categoryName: string) {
    console.log('You clicked on the button!', categoryName);
    this.infoAreaService.setSelectedArea(categoryName); //changez ça!!
    this.router.navigate(['/page-category', categoryName]); // Navigate to the new composant
  }
}
