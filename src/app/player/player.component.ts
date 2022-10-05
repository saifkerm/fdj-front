import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {PlayerModel} from "../../models/player.model";
import {TeamService} from "../teams/team.service";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnChanges, OnDestroy {

  players: PlayerModel[] = [];
  @Input() teamId: string | undefined;

  playerSubscription: Subscription | undefined;

  constructor(private teamService: TeamService) { }

  ngOnChanges(changes: SimpleChanges) {
    const curVal: string | undefined = changes['teamId'].currentValue;

    if (curVal) {
      this.playerSubscription = this.teamService.getPlayersByTeamId(curVal).subscribe((players: PlayerModel[]) => {
        this.players = players;
      });
    }
  }

  ngOnDestroy() {
    this.playerSubscription?.unsubscribe();
  }
}
