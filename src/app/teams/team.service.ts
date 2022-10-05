import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LeagueModel} from "../../models/league.model";
import {environment} from "../../environments/environment";
import {PlayerModel} from "../../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  /**
   * get Players By Team id
   *
   * @param {string} value, team _id
   */
  getPlayersByTeamId(value: string): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(`${(environment.FDJ_API_URI)}/teams/players/${value}`, {responseType: 'json'});
  }
}
