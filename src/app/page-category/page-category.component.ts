import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InfoIdMealService } from '../infoidmeal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meals } from '../meals';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit {
  meals: Meals[] = [];
  filteredMeals: any[] = [];
  selectedCategory: string = '';

  constructor(private mealService: DataService, private router: Router, private route: ActivatedRoute, private infoidmeal: InfoIdMealService) {}
  
  category: string = ''; // Déclarer une variable pour stocker la valeur de category

    ngOnInit(): void {
    // Souscrire aux changements de paramètres de l'URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Récupérer la valeur de country à partir des paramètres de l'URL
      this.category = params.get('category') || ''; // Utiliser '' comme valeur par défaut si category est null
      // Vous pouvez maintenant utiliser la valeur de this.country comme nécessaire
      console.log('Catégorie sélectionnée:', this.category);

      this.mealService.getMealsByCategoryName(this.category).subscribe(meals => {
        this.meals = meals;
      });
    });

    this.loadMeals(this.category);

  }

  loadMeals(category: string): void {
    this.mealService.getMealsByCategoryName(category).subscribe(meals => {
      this.meals = meals;
      this.filteredMeals = meals; // Réinitialisez filteredMeals avec les données complètes non filtrées
    });
  }
  
  SearchBarpageCategory(filterValue: string): void {
    console.log('Filtering with:', filterValue);
  
    if (filterValue.trim() !== '') {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      this.filteredMeals = this.meals;
    }
  
    console.log('Filtered Meals:', this.filteredMeals);  //Ajoutez des journaux de débogage dans la fonction SearchBarpageArea pour voir si elle est appelée et pour vérifier les résultats de la recherche.
  }

  onButtonClick(mealdescription: string): void {
    let id: number = parseInt(mealdescription, 10);
    console.log('You clicked on the button page category!', id);
    this.infoidmeal.setSelectedIdMeal(id);
    this.router.navigate(['/page-mealsdetails', id]); // Navigate to the new composant
  }

  }


