import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../models/food.model";

@Component({
  selector: 'app-hike-food',
  templateUrl: './hike-food.component.html',
  styleUrls: ['./hike-food.component.css']
})
export class HikeFoodComponent implements OnInit {
  @Input() food: Food = new Food('', '', 0);

  constructor() { }

  ngOnInit(): void {
  }

}
