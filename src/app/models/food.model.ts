export class Food {
  public name: string;
  public type: string;
  public quantity: number;

  constructor(name: string, type: string, quantity: number) {
    this.name = name;
    this.type = type;
    this.quantity = quantity;
  }
}
