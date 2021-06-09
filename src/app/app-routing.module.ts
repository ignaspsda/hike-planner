import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HikeDetailsComponent} from "./hike-details/hike-details.component";
import {HikeItemsListComponent} from "./hike-items-list/hike-items-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/trip-details', pathMatch: 'full' },
  { path: 'trip-details', component: HikeDetailsComponent, children: [
      { path: 'trip-items/:season/:days', component: HikeItemsListComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
