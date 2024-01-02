import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InfoIdMealService } from '../infoidmeal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meals } from '../meals';

@Component({
  selector: 'app-page-area',
  templateUrl: './page-area.component.html',
  styleUrls: ['./page-area.component.css']
})
export class PageAreaComponent implements OnInit {
  meals: Meals[] = [];
  filteredMeals: Meals[] = [];
  selectedArea: string = '';
  areas: any[] = []; 
  filteredArea: any[] = [];

  constructor(private mealService: DataService, private router: Router, private route: ActivatedRoute, private infoidmeal:InfoIdMealService) {}
  
  country: string = ''; // Déclarer une variable pour stocker la valeur de country

  

    

    // this.infoareService.selectedArea$.subscribe((area) => {
    //   // Filtrer les plats par l'area sélectionnée
    //   this.filterMealsByArea(area);
    // });

    // this.infoareService.selectedArea$.subscribe((area) => {
    //   this.selectedArea = area;
    // });

    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const areaname = params.get('areaName');
    
    //   if (areaname !== null) {
    //     this.mealService.getMeals_areaname(areaname).subscribe(meals => {
    //       this.meals = meals;
    //     });
    //   }
    // });​
    ngOnInit(): void {
    // Souscrire aux changements de paramètres de l'URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Récupérer la valeur de country à partir des paramètres de l'URL
      this.country = params.get('country') || ''; // Utiliser '' comme valeur par défaut si country est null
      // Vous pouvez maintenant utiliser la valeur de this.country comme nécessaire
      console.log('Pays sélectionné:', this.country);

      this.mealService.getMealsByAreaName(this.country).subscribe(meals => {
        this.meals = meals;
      });
    });

    this.loadMeals(this.country);

  }

  loadMeals(country: string): void {
    this.mealService.getMealsByAreaName(country).subscribe(meals => {
      this.meals = meals;
      this.filteredMeals = meals; // Réinitialisez filteredMeals avec les données complètes non filtrées
    });
  }
  
  SearchBarpageArea(filterValue: string): void {
    if (filterValue.trim() !== '') {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      this.filteredMeals = this.meals; // Réinitialisez filteredMeals avec les données complètes non filtrées
    }
  }

  onButtonClick(mealdescription: string): void {
    let id: number = parseInt(mealdescription, 10);
    console.log('You clicked on the button page area!', id);
    this.infoidmeal.setSelectedIdMeal(id);
    this.router.navigate(['/page-mealsdetails', id]); // Navigate to the new composant
  }

  // loadMeals(): void {
  //   // this.mealService.getMeals('').subscribe((data) => {
  //   //   this.meals = data;
  //   //   this.filteredMeals = data;

  //   //   this.infoareService.selectedArea$.subscribe((area) => {
  //   //     this.selectedArea = area;
  //   //   });
  //   name: this.infoareService.setSelectedArea;
  //     this.route.paramMap.subscribe((params: ParamMap) => {
  //       const areaname = params.get('name');
      
  //       if (areaname !== null) {
          
  //       }
  //     });​


    // filterMealsByArea(area: string): void {
    //   this.mealService.getMeals().subscribe((data: Meals[]) => {
    //     // Filtrer les plats par l'area
    //     this.meals = data.filter((meal: Meals) => meal.nomArea === area);
    //   });
    // }

    
  }


