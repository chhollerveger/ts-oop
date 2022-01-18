import Model from "./model";

export default class Client extends Model {

  email: string;
  company: string;

  constructor(name: string, birthDate: Date, email: string, company: string) {
    super(name, birthDate);
    this.email = email;
    this.company = company;
  }

}