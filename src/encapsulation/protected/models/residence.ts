export default class Residence {

  public color: string;
  public address: object;

  constructor(color: string, address: object) {
    this.color = color;
    this.address = address;
  }

  public callIntercom(): string {
    return "Calling intercom!";
  }

  protected answerIntercom(message: string): string {
    return message;
  }

}