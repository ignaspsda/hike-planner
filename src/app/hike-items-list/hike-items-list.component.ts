import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../services/items.service";
import {Item} from "../models/item.model";
import {FoodService} from "../services/food.service";
import {Food} from "../models/food.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-hike-items-list',
  templateUrl: './hike-items-list.component.html',
  styleUrls: ['./hike-items-list.component.css']
})
export class HikeItemsListComponent implements OnInit {
  items: Item[] = [];
  foodForHike: Food[] = [];
  season: string = '';
  daysInHike: number = 0;

  constructor(private itemsService: ItemsService, private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.season = params['season'];
      this.daysInHike = +params['days'];
      this.items = this.itemsService.getItems(this.season, this.daysInHike);
      this.foodForHike = this.foodService.getFood(this.daysInHike);
    });
  }

}
