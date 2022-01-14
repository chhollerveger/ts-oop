import { IEmail } from "./interfaces/i-email";
import { IUser } from "./interfaces/i-user";
import { Notifier } from "./notifier";

class Email extends Notifier implements IEmail {

  name: string;
  email: string;

  constructor(user: IUser) {
    super();
    this.name = user.name;
    this.email = user.email;
  }

  send(user: IUser): boolean {
    console.log(`Sending email to the user ${this.email} ...`);
    return true;
  }

}