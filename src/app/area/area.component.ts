import { Component, OnInit, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { DataService } from '../data.service'; 
import { Router } from '@angular/router';
import { Area } from '../area';
import { PageAreaComponent } from '../page-area/page-area.component';
import { InfoAreaService } from '../infoarea.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  areas: any[] = []; 
  filteredArea: any[] = [];

  constructor(private mealService: DataService, private router: Router, private infoAreaService: InfoAreaService, private elementRef: ElementRef, private ngZone: NgZone, private renderer: Renderer2) {
  }

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

  
  onClick(areaName: string) {
    console.log('You clicked on the button!', areaName);
    this.infoAreaService.setSelectedArea(areaName);
    this.router.navigate(['/page-area', areaName]); // Navigate to the new composant
  }

  // onDocumentClick(event: MouseEvent): void {
  //   // Vérifier si le clic provient du bouton spécifique
  //   const isButtonClicked = this.elementRef.nativeElement.contains(event.target);

  //   if (isButtonClicked) {
  //     // Enregistrer l'area lorsque le bouton est cliqué
  //     this.infoAreaService.GetAreas(areas);
  //   }
  // }

}
