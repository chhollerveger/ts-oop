import IEmail from "../interfaces/i-email";
import INotifier from "../interfaces/i-notifier";
import IUser from "../interfaces/i-user";
import Notifier from "./notifier";

export default class Email extends Notifier implements INotifier, IEmail {

  name: string;
  email: string;

  constructor(user: IUser) {
    super();
    this.name = user.name;
    this.email = user.email;
  }

  send(): boolean {
    console.log(`Sending email to the user ${this.email} ...`);
    return true;
  }

}