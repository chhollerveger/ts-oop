import Company from "./company";

export default class Market extends Company {

  provideService(): string {
    return "Selling food, drink and more!";
  }

}