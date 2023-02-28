import { Component } from '@angular/core';
import { lunchAndDinner } from '../lunchAndDinnerList';

@Component({
  selector: 'app-lunch-and-dinner-list',
  templateUrl: './lunch-and-dinner-list.component.html',
  styleUrls: ['./lunch-and-dinner-list.component.css']
})
export class LunchAndDinnerListComponent {
  lunchAndDinner = lunchAndDinner;
}
