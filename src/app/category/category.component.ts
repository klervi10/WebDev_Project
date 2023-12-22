// category.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Categories } from '../Categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  filteredCategory: any[] = [];

  constructor(private mealService: DataService, private router : Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  SearchBarCat(filterValue: string): void {
    if (filterValue.trim() !== '') {
      this.filteredCategory = this.categories.filter((category) =>
        category.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      this.filteredCategory = this.categories;
    }
  }

  loadCategories(): void {
    this.mealService.getCategories().subscribe((data: any) => {
      this.categories = data;
      this.filteredCategory = data; 
    });
  }
  onClick(category : Categories) {
    console.log('You clicked on the button!');
    this.router.navigate(['/american-recipe']); // Naviguez vers le nouveau composant
  }


}
