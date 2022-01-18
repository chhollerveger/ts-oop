import INotifier from "../interfaces/i-notifier";
import IPhone from "../interfaces/i-phone";
import IUser from "../interfaces/i-user";
import Notifier from "./notifier";


export default class SMS extends Notifier implements INotifier, IPhone {

  phoneNumber: string;

  constructor(user: IUser) {
    super();
    this.phoneNumber = user.phone;
  }

  send(): boolean {
    console.log(`Sending SMS to User ${this.phoneNumber} ...`);
    return true;
  }

}