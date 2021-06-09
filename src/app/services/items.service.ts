import {Injectable} from '@angular/core';
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsForHike: Item[] = [];

  private items: Item[] = [
    new Item('Striukė nuo lietaus', ['Pavasaris', 'Vasara', 'Ruduo'], true, 1),
    new Item('Šiltos kojinės', ['Žiema', 'Ruduo'], false, 1),
    new Item('Sintetinės kojinės', ['Vasara', 'Pavasaris'], false, 1),
    new Item('Marškinėlai trumpomis rankovėmis', ['Vasara'], false, 1),
    new Item('Palapinė', ['Pavasaris', 'Vasara', 'Ruduo', 'Žiema'], true, 1),
    new Item('Kelnės', ['Pavasaris', 'Vasra', 'Ruduo', 'Žiema'], true, 2),
    new Item('Šilta striukė', ['Žiema', 'Ruduo'], true, 1),
    new Item('Sintetinis džemperis', ['Pavasaris', 'Vasara', 'Ruduo', 'Žiema'], true, 1),
    new Item('Kepurė nuo saulės', ['Pavasaris', 'Vasara'], true, 1),
    new Item('Šilta kepurė', ['Ruduo', 'Žiema'], true, 1),
    new Item('Miegmaišis', ['Pavasaris', 'Vasara', 'Ruduo', 'Žiema'], true, 1),
    new Item('Maisto įrankiai ir indai', ['Pavasaris', 'Vasara', 'Ruduo', 'Žiema'], true, 1),
    new Item('Prožektorius', ['Pavasaris', 'Vasara', 'Ruduo', 'Žiema'], true, 1)
  ];

  constructor() { }

  getItems(season: string, daysInHike: number): Item[] {
    this.itemsForHike.length = 0;
    this.items
      .filter((item: Item) => item.season.includes(season))
      .forEach(item => this.itemsForHike.push(Object.assign({}, item)));

    for (let i = 0; i < this.itemsForHike.length; i++){
      if(!this.itemsForHike[i].unique){
        this.itemsForHike[i].quantity *= daysInHike;
      }
    }
    console.log(Math.floor(Math.random() * (this.itemsForHike.length + 1)));
    return this.itemsForHike;
  }
}
