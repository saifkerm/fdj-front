import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeaguesComponent} from "./leagues/leagues.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path : '', component : LeaguesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
