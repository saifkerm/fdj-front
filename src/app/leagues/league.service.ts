import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { LeagueModel } from "../../models/league.model";
import {environment} from "../../environments/environment";

@Injectable()
export class LeagueService {

  constructor(private http: HttpClient) { }

  /**
   * Searching leagues by name
   *
   * @param {string} value, league name
   */
  findLeaguesByName(value: string): Observable<LeagueModel[]> {
    if (value === '') {
      return of([]);
    }

    return this.http.get<LeagueModel[]>(`${(environment.FDJ_API_URI)}/leagues/search/${value}`, {responseType: 'json'});
  }

  /**
   * Find league by _id
   *
   * @param {string} value, league _id
   */
  findLeagueById(value: string): Observable<LeagueModel> {
    return this.http.get<LeagueModel>(`${(environment.FDJ_API_URI)}/league/_id/${value}`, {responseType: 'json'});
  }
}
