import IUser from "./i-user";

export default interface INotifier {

  send(user: IUser): boolean;

}