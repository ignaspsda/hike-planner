export class Item {
  public itemName: string;
  public season: string[];
  public unique: boolean;
  public quantity: number;

  constructor(itemName: string, season: string[], unique: boolean, quantity: number) {
    this.itemName = itemName;
    this.season = season;
    this.unique = unique;
    this.quantity = quantity;
  }
}
