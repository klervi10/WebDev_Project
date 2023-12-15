// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { StudentMealsComponent } from './student-meals/student-meals.component';
import { ElaborateMealsComponent } from './elaborate-meals/elaborate-meals.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student', component: StudentMealsComponent },
  { path: 'elaborate', component: ElaborateMealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
