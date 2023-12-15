import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() filterEvent = new EventEmitter<string>()
  form: FormGroup
  filter: FormControl

  constructor() {
    this.filter = new FormControl('', { nonNullable: true })
    this.form = new FormGroup({
      filter: this.filter
    })
  }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe(
      (filterValue: string) => this.filterEvent.emit(filterValue)
    )
  }

  Meal() {
    //console.log('Search for meal:', this.name.value);
  }    //this.search.emit(this.searchTerm);
}


