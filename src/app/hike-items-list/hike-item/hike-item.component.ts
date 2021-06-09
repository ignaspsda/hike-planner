import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-hike-item',
  templateUrl: './hike-item.component.html',
  styleUrls: ['./hike-item.component.css']
})
export class HikeItemComponent implements OnInit {
  @Input() item: Item = new Item('', [], true, 0);

  constructor() { }

  ngOnInit(): void {
  }

}
