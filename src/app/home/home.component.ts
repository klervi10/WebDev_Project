import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  meals: any[] = []
  currentDate: Date = new Date();
  currentMonth!: string;
  currentDay!: string;

  constructor(private mealService: DataService) {}
  
  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentMonth = this.mealService.getMonthName(this.currentDate.getMonth());
    this.currentDay = this.mealService.getDayOfWeek(this.currentDate.getDay());

    this.loadMeals();
  }

  onFilterChanged(filterValue: string): void {
    // Tu peux traiter l'événement ici si nécessaire
    console.log(filterValue);
  }

  loadMeals(): void{
    this.mealService.getMeals().subscribe(
      data => this.meals = data
    );
  }
}
