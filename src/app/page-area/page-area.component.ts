import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-area',
  templateUrl: './page-area.component.html',
  styleUrls: ['./page-area.component.css']
})
export class PageAreaComponent implements OnInit {
  meals: any[] = [];
  filteredMeals: any[] = [];

  constructor(private mealService: DataService) {}
  
  ngOnInit(): void {

    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals('').subscribe((data) => {
      this.meals = data;
      this.filteredMeals = data;
      
    });
  }

}
