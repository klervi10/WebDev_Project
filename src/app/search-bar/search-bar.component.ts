import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(){
    //this.search.emit(this.searchTerm);
  }

}
