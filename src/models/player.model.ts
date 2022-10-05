export class PlayerModel {
  _id : string;
  name : string;
  position: string;
  thumbnail: string;
  signin: {
    amount: string;
    currency: string;
  };
  born: string;

  constructor(player: any) {
    this._id = player._id ?? undefined,
    this.name = player.name ?? null,
    this.position = player.position ?? null,
    this.thumbnail = player.thumbnail ?? null,
    this.signin = player.signin ?? {},
    this.born = player.born?? null
  }
}
