import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css'
})
export class SearchFilter {

  @Input() placeholder = '';
  @Input() filters: string[] = [];

  @Output() searchChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();

  search = '';
  status = 'All Status';
  category = '';

  onSearch() {
    this.searchChange.emit(this.search);
  }

  onStatus() {
    this.statusChange.emit(this.status);
  }

  onCategory() {
    this.categoryChange.emit(this.category);
  }
}