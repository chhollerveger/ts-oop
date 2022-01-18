export default class User {

  readonly id: number = 1;
  public name: string;
  private password: string;
  readonly registrationDate: Date;

  constructor(name: string, password: string, registrationDate: Date) {
    this.name = name;
    this.password = password;
    this.registrationDate = registrationDate;
  }

}
