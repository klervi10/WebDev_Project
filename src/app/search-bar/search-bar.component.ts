import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  form: FormGroup
  filter: FormControl

  constructor() {
    this.filter = new FormControl('', { nonNullable: true })
    this.form = new FormGroup({
      filter: this.filter
    })
  }

  Meal() {
    //console.log('Search for meal:', this.name.value);
  }    //this.search.emit(this.searchTerm);
}


