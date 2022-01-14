import { INotifier } from "./interfaces/i-notifier";
import { IUser } from "./interfaces/i-user";

export abstract class Notifier implements INotifier {

  abstract send(user: IUser): boolean;

}