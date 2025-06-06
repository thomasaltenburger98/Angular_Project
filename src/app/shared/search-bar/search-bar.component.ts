import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchValue: string = "";

  onSearch(): void {
    if (!this.searchValue) {
        return;
    }
    this.search.emit(this.searchValue);
  }
}
