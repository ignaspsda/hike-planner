import { Injectable } from '@angular/core';
import {Food} from "../models/food.model";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private food: Food[] = [
    new Food('Avižų košė', 'Pusryčiai', 1),
    new Food('Sumuštiniai', 'Pietūs', 1),
    new Food('Čili troškinys', 'Vakarienė', 1)
  ];

  constructor() { }

  getFood(daysInHike: number): Food[] {
    let foodArray = this.food.slice();
    for (let i = 0; i < foodArray.length; i++) {
      foodArray[i].quantity *= daysInHike;
    }

    return foodArray;
  }
}
