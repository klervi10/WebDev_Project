import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap  } from 'rxjs';
import { Meals } from './meals';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  meals: any[] = []
    

  constructor(private HttpClient: HttpClient) {
      this.meals.push( { name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', img: 'assets/mojito.jpg', alcohol: true } )
      this.meals.push( { name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', img: 'assets/cubalibre.jpg', alcohol: true } )
      this.meals.push( { name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', img: 'assets/margarita.jpg', alcohol: true } )
      this.meals.push( { name: 'Sex on the beach', description: 'Le Sex on the Beach est un cocktail alcoolisé contenant de la vodka, du Schnaps à la pêche, du jus d\'orange et du jus de canneberge', img: 'assets/sexonthebeach.jpg', alcohol: true } )
      this.meals.push( { name: 'Virgin Mojito', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', img: 'assets/virginmojito.jpg', alcohol: false } )
      this.meals.push( { name: 'Halloween Punch', description: 'Pour en mettre plein les yeux le soir le plus effrayant de l\'année, préparez un punch d\'Halloween facile… couleur rouge sang et rempli de globes oculaires !', img: 'assets/holloweenpunch.jpg', alcohol: false } )
  }  

  getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  }
  
  getDayOfWeek(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
  
  getDishes(): Observable<Meals[]>{
    return this.HttpClient.get<any[]>('https://www.themealdb.com/api/json/v1/1/search.php?f=a').pipe(
      tap((data: any) => console.log(data)),
      map((data: any) => data.meals),
      tap((data: any) => console.log(data)),
      map((data: any) => {
        const res: Meals[] = [];
        for( let i=0; i<data.length; i++){
          res.push({
            name: data[i].nom,
            description: data[i].description, 
            img: data[i].image,
          });
        }
        console.log(res);
        return res;
      }),
    );
  }


  loadRandomMeal() {
    return this.HttpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')

  }​
}


