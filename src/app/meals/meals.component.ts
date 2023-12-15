import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
    @Input() meals: any
    @Output() eventOut = new EventEmitter<string>()
    isHidden: boolean = false;

    ingredients: Array<string> = new Array<string>()
    
    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        this.eventOut.emit(this.meals.name)
    }

    ngOnDestroy(): void {
    }
}
