import { IUser } from "./interfaces/i-user";

export abstract class Notifier {

  abstract send(user: IUser): boolean;

}