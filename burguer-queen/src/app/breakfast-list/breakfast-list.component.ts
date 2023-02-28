import { Component } from '@angular/core';
import { breakfast } from '../breakfastList';

@Component({
  selector: 'app-breakfast-list',
  templateUrl: './breakfast-list.component.html',
  styleUrls: ['./breakfast-list.component.css']
})
export class BreakfastListComponent {
  breakfast = breakfast;
}
