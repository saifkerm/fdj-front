import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { LeagueModel } from "../../models/league.model";
import { TeamModel } from "../../models/team.model";
import { Subscription } from "rxjs";
import {LeagueService} from "../leagues/league.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnChanges, OnDestroy {

  displayPlayerComp: boolean = false;
  displayTeamComp: boolean = true;
  selectedTeam: TeamModel | undefined;
  teams: TeamModel[] = [];
  @Input() league: Partial<LeagueModel> | undefined;
  teamSubscription: Subscription | undefined;

  constructor(private leagueService: LeagueService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const curVal: Partial<LeagueModel> = changes['league'].currentValue;

    if (curVal?._id) {
      this.teamSubscription = this.leagueService.findLeagueById(curVal._id).subscribe(({teams}: LeagueModel) => {

        this.teams = teams;
      });
    }
  }

  ngOnDestroy(): void {
    this.teamSubscription?.unsubscribe();
  }

  getPlayers(team: TeamModel): void {
    this.selectedTeam = team;
    this.displayPlayerComp = true;
    this.displayTeamComp = false;
  }

  backFn(): void {
    this.displayPlayerComp = false;
    this.displayTeamComp = true;
  }
}
