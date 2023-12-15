import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Assure-toi d'importer correctement le service DataService
import { Area } from '../area'; // Assure-toi d'importer correctement le modèle Area

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  areas: Area[] = []; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAreas().subscribe(data => {
      this.areas = data;
    });
  }

}
