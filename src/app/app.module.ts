import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueService } from "./leagues/league.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from "./angular-material.module";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { TeamsComponent } from "./teams/teams.component";
import { MatCardModule } from "@angular/material/card";
import { PlayerComponent } from "./player/player.component";
import { httpInterceptorProviders } from "../interceptors";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    PlayerComponent,
    TeamsComponent,
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [LeagueService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
