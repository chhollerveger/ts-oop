import IUser from "./interfaces/i-user";

export default abstract class Notifier {

  abstract send(user: IUser): boolean;

}