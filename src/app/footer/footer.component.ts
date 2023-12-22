// footer.component.ts

// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// Component decorator with metadata
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // Constructor with dependency injection
  constructor(private mealService: DataService) {}
  
  // Properties to store current date, month, and day
  currentDate: Date = new Date();
  currentMonth!: string;
  currentDay!: string;

  // Lifecycle hook - called after the component is initialized
  ngOnInit(): void {
    this.currentDate = new Date();
    
    // Get the name of the month and day of the week using the data service
    this.currentMonth = this.mealService.getMonthName(this.currentDate.getMonth());
    this.currentDay = this.mealService.getDayOfWeek(this.currentDate.getDay());
  }
}
