import { Injectable } from '@angular/core';
import {Food} from "../models/food.model";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodForHike: Food[] = [];

  private food: Food[] = [
    new Food('Avižų košė', 'Pusryčiai', 1),
    new Food('Sumuštiniai', 'Pietūs', 1),
    new Food('Troškinys', 'Vakarienė', 1)
  ];

  constructor() { }

  getFood(daysInHike: number): Food[] {
    this.foodForHike.length = 0;
    this.food.forEach(food => this.foodForHike.push(Object.assign({}, food)));

    for (let i = 0; i < this.foodForHike.length; i++) {
      this.foodForHike[i].quantity *= daysInHike;
    }

    return this.foodForHike;
  }
}
