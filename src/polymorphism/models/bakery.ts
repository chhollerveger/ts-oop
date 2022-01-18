import Company from "./company";

export default class Bakery extends Company {

  provideService(): string {
    return "Selling bread!";
  }

}