import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemsService} from "../services/items.service";
import {ValidateNumber} from "../shared/number.validator";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  hikeDetailForm: FormGroup;
  seasons = ['Pavasaris', 'Vasara', 'Ruduo', 'Žiema'];

  constructor(private formBuilder: FormBuilder, private itemService: ItemsService, private route: ActivatedRoute, private router: Router) {
    this.hikeDetailForm = formBuilder.group({
      hikeLength: formBuilder.control(100, [Validators.required, ValidateNumber]),
      season: formBuilder.control(this.seasons[0], Validators.required),
      daysOnHike: formBuilder.control(1, [Validators.required, ValidateNumber])
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.router.navigate(['trip-items', this.hikeDetailForm.value.season, this.hikeDetailForm.value.daysOnHike], {relativeTo: this.route});
  }
}
