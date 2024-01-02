import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InfoIdMealService } from '../infoidmeal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MealDetails } from '../meal-details';

@Component({
  selector: 'app-mealsdetails',
  templateUrl: './mealsdetails.component.html',
  styleUrls: ['./mealsdetails.component.css']
})

export class MealsdetailsComponent implements OnInit {
  meals: MealDetails[] = [];
  filteredMeals: any[] = [];
  selectedIdMeal: number=0;

  constructor(private mealService: DataService, private router: Router, private route: ActivatedRoute, private infoidmeal: InfoIdMealService) {}
  
  id: number=0; // Déclarer une variable pour stocker la valeur de l'id

  get ingredientsAndMeasures(): string[] {
    const result: string[] = [];

    for (let i = 0; i < Math.max(this.meals[0]?.ingredients.length, this.meals[0]?.measures.length); i++) {
      const ingredient = this.meals[0]?.ingredients[i] || '';
      const measure = this.meals[0]?.measures[i] || '';

      if (ingredient && measure) {
        result.push(`${ingredient}: ${measure}`);
      }
    }

    return result;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Récupérer la valeur de id à partir des paramètres de l'URL et convertir en nombre
      const idFromParams = params.get('id');
      this.id = idFromParams ? parseInt(idFromParams, 10) : 0; // Utilisez 0 comme valeur par défaut si id est null
      // Vous pouvez maintenant utiliser la valeur de this.id comme nécessaire
      console.log('id sélectionnée:', this.id);
    });

      // Appeler le service avec l'ID extrait
    this.mealService.getMealDetails(this.id).subscribe(meals => {
      this.meals = meals;
    });
    };
  }


