// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';
import { AmericanRecipeComponent } from './american-recipe/american-recipe.component';
import { PageAreaComponent } from './page-area/page-area.component';
import { PageCategoryComponent } from './page-category/page-category.component';
import { MealsdetailsComponent } from './mealsdetails/mealsdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'area', component: AreaComponent },
  { path: 'american-recipe', component: AmericanRecipeComponent},
  { path: 'page-area/:country', component: PageAreaComponent},
  { path: 'page-category/:category', component: PageCategoryComponent},
  { path: 'page-mealsdetails/:id', component: MealsdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
