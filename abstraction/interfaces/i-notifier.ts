import { IUser } from "./i-user";

export interface INotifier {

  send(user: IUser): boolean;

}