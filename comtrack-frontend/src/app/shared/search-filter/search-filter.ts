import { Component , Input  } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  imports:  [],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {
  @Input() placeholder = '';

@Input() filters: string[] = [];
}
