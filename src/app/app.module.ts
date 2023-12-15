import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DishComponent } from './dish/dish.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
=======
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';
>>>>>>> 95c4e664480e49ac2ff05d8f69386e070706c2ef

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
<<<<<<< HEAD
    DishComponent,
    DessertsComponent,
    SearchBarComponent,
=======
    CategoryComponent,
    AreaComponent,
>>>>>>> 95c4e664480e49ac2ff05d8f69386e070706c2ef
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
