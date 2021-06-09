import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HikeItemsListComponent } from './hike-items-list/hike-items-list.component';
import { HikeItemComponent } from './hike-items-list/hike-item/hike-item.component';
import { HikeFoodComponent } from './hike-items-list/hike-food/hike-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HikeDetailsComponent,
    HikeItemsListComponent,
    HikeItemComponent,
    HikeFoodComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
