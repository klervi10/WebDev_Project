import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  areas: any[] = []; 

  constructor(private mealService: DataService) {}

  ngOnInit(): void {
    this.loadAreas();
  };

  loadAreas(): void {
    this.mealService.getAreas().subscribe((data: any) => {
      this.areas = data;
    });
  }

}
