/* Import necessary Angular modules and services*/
import { Component, OnInit, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { DataService } from '../data.service'; 
import { Router } from '@angular/router';
import { Area } from '../area';
import { PageAreaComponent } from '../page-area/page-area.component';
import { InfoAreaService } from '../infoarea.service';

/* Component decorator with metadata */
@Component({
  selector: 'app-area',   /* Angular component selector used in HTML */
  templateUrl: './area.component.html',   /* Path to the HTML template file */
  styleUrls: ['./area.component.css']   /* Array of paths to external CSS style files */
})
export class AreaComponent {
  // Array to store all areas and filtered areas
  areas: any[] = []; 
  filteredArea: any[] = [];

  constructor(private mealService: DataService, private router: Router, private infoAreaService: InfoAreaService, private elementRef: ElementRef, private ngZone: NgZone, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // This lifecycle hook is called when the component is initialized, it is a good place to perform component initialization tasks.
  
    // Calling the 'loadAreas' method to fetch and load data related to areas.
    this.loadAreas();
  };

  SearchBarArea(filterValue: string): void {
    // Check if the provided filter value has non-whitespace characters.
    if (filterValue.trim() !== '') {
      // If there are non-whitespace characters, filter the 'areas' based on the provided value.
      this.filteredArea = this.areas.filter((area) =>
        // Case-insensitive search: include areas whose names contain the filter value.
        area.name.toLowerCase().includes(filterValue.toLowerCase())
        // area.name.toLowerCase().startsWith(filterValue.toLowerCase())
      );
    } else {
      // If the filter value is empty or contains only whitespace, set 'filteredArea' to the original 'areas'.
      this.filteredArea = this.areas;
    }
  }

  loadAreas(): void {
    // Call the 'getAreas' method of the 'mealService' to fetch area data.
    this.mealService.getAreas().subscribe((data: any) => {
      // Upon successful subscription, update the 'areas' and 'filteredArea' arrays with the fetched data.
      this.areas = data;
      this.filteredArea = data;
    });
  }
  
  onClick(areaName: string) {
    // Log a message indicating that the button has been clicked, along with the selected areaName.
    console.log('You clicked on the button!', areaName);
  
    // Set the selected areaName using the 'setSelectedArea' method of the 'infoAreaService'.
    this.infoAreaService.setSelectedArea(areaName);
  
    // Navigate to a new component/page ('/page-area') with the selected areaName as a route parameter.
    this.router.navigate(['/page-area', areaName]);
  }

}
