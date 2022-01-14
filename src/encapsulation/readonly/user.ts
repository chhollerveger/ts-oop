class User {

  readonly id: number = 1;
  public name: string;
  private password: string;
  readonly registrationDate: Date;

  constructor(id: number, name: string, password: string, registrationDate: Date) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.registrationDate = registrationDate;
  }

}
