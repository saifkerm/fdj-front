import {TeamModel} from "./team.model";

export class LeagueModel {
  _id: string;
  name: string;
  sport: string;
  teams: TeamModel[];

  constructor(league: any) {
    this._id = league._id ?? undefined,
    this.name = league.name ?? null,
    this.sport = league.sport ?? null,
    this.teams = league.teams ?? []
  }
}
