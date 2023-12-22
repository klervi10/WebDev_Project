// search-bar.component.ts

// Import necessary Angular modules and classes
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Component decorator with metadata
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // Output property to emit filter events
  @Output() filterEvent = new EventEmitter<string>();

  // Form controls for the search bar
  form: FormGroup;
  filter: FormControl;

  // Constructor to initialize form controls
  constructor() {
    this.filter = new FormControl('', { nonNullable: true }); // FormControl for the filter input
    this.form = new FormGroup({
      filter: this.filter
    });
  }

  // Lifecycle hook - called after the component is initialized
  ngOnInit(): void {
    // Subscribe to value changes of the filter input
    this.filter.valueChanges.subscribe(
      (filterValue: string) => this.filterEvent.emit(filterValue) // Emit filter events when the input value changes
    );
  }
}




