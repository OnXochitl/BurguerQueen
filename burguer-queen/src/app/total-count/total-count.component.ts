import { Component } from '@angular/core';
import { breakfast } from '../breakfastList';
import { lunchAndDinner } from '../lunchAndDinnerList';

@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.css']
})
export class TotalCountComponent {
  price : string | undefined;

  showPriceMenu(plate: any) {
    return this.price = "el " + plate.name + "cuesta " + plate.price ;
  }
}
