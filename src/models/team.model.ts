import {PlayerModel} from "./player.model";

export class TeamModel {
  _id: string;
  name: string;
  thumbnail: string;
  players: PlayerModel[];

  constructor(player: any) {
    this._id = player._id ?? undefined,
    this.name = player.name ?? null,
    this.thumbnail = player.thumbnail ?? null,
    this.players = player.players ?? []
  }
}
