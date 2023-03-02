import { Component } from '@angular/core';
import { breakfast } from '../breakfastList';
import { lunchAndDinner } from '../lunchAndDinnerList';

@Component({
  selector: 'app-breakfast-list',
  templateUrl: './breakfast-list.component.html',
  styleUrls: ['./breakfast-list.component.css']
})
export class BreakfastListComponent {
  breakfasts = breakfast;
  lunchAndDinner = lunchAndDinner;

  clickMenu = false;

  showMenu() {
    return (this.clickMenu = true);
  }

  hideMenu() {
    return (this.clickMenu = false);
  }

  buttonMenuBreakfast(breakfast: any) {
    return breakfast.price;
  }

  buttonMenuLuchAndDinner(lunchAndDinner: any) {
    return console.log(lunchAndDinner.price);
  }
}
