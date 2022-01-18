import Residence from "./residence";

export default class House extends Residence {

  public enterTheHouse(): string {
    return this.answerIntercom("Hi, who are you?");
  }

}