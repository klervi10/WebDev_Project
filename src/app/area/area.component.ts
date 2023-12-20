import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Router } from '@angular/router';
import { Area } from '../area';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  areas: any[] = []; 
  filteredArea: any[] = [];

  constructor(private mealService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadAreas();
  };

  SearchBarArea(filterValue: string): void {
    if (filterValue.trim() !== '') {
      this.filteredArea = this.areas.filter((area) =>
      area.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      this.filteredArea = this.areas;
    }
  }



  loadAreas(): void {
    this.mealService.getAreas().subscribe((data: any) => {
      this.areas = data;
      this.filteredArea = data;
    });
  }

  
  onClick(area : Area) {
    console.log('You clicked on the button!');
    this.router.navigate(['/american-recipe']); // Naviguez vers le nouveau composant
  }

}
