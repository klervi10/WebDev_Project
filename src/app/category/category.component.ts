// category.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  filteredCategory: any[] = [];

  constructor(private mealService: DataService) {}

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
}
