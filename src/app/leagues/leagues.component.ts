import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LeagueService} from "./league.service";
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {LeagueModel} from "../../models/league.model";
import {fromEvent} from "rxjs";

const API_KEY = "e8067b53"
@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  @ViewChild('leagueSearchInput', { static: true }) leagueSearchInput!: ElementRef;

  debounceTime: number = 500;
  filteredLeagues: LeagueModel[] | undefined = [];
  isLoading = false;
  minLengthTerm: number = 3;
  selectedLeague: Partial<LeagueModel> | undefined = undefined;

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {

    fromEvent(this.leagueSearchInput.nativeElement,  'keyup')
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // if character length greater then 3
        filter(res => res.length >= this.minLengthTerm),
        // Time in milliseconds between key events
        debounceTime(this.debounceTime),
        // If previous query is diffent from current
        distinctUntilChanged()
        // subscription for response
      ).subscribe((text: string) => {
        this.isLoading = true;
        this.leagueService.findLeaguesByName(text)
          .subscribe(
          (data: LeagueModel[]) => this.nextLeagues(data),
          error => {
            this.isLoading = false;
            this.filteredLeagues = [];
          }
        )
    });
  }

  nextLeagues(data: LeagueModel[]) {
    this.isLoading = false;
    this.filteredLeagues = !data.length ? [] : data
  }

  displayWith(value: LeagueModel) {
    return value?.name;
  }

  clearSelection() {
    this.selectedLeague = undefined;
    this.filteredLeagues = [];
  }
}
