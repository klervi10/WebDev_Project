import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  randomMeal: any;
  constructor(private mealService: DataService) {}
  
  currentDate: Date = new Date();
  currentMonth!: string;
  currentDay!: string;

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentMonth = this.mealService.getMonthName(this.currentDate.getMonth());
    this.currentDay = this.mealService.getDayOfWeek(this.currentDate.getDay());

    this.mealService.loadRandomMeal().subscribe(
      data => console.log(data)
    );
  }

}
