import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { MealsComponent } from './meals/meals.component';
import { AmericanRecipeComponent } from './american-recipe/american-recipe.component';
import { PageAreaComponent } from './page-area/page-area.component';
import { PageCategoryComponent } from './page-category/page-category.component';
import { MealsdetailsComponent } from './mealsdetails/mealsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    SearchBarComponent,
    CategoryComponent,
    AreaComponent,
    UserFormComponent,
    MealsComponent,
    AmericanRecipeComponent,
    PageAreaComponent,
    PageCategoryComponent,
    MealsdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule , 
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
