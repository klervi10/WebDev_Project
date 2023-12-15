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
  logoPath: string = 'assets/Beef.png'

  constructor(private mealService: DataService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.mealService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
