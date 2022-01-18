import Email from "./models/email";
import SMS from "./models/sms";
import IUser from "./interfaces/i-user";

const user: IUser = {
  name: "Peter Parker",
  email: "peter@avangers.com",
  phone: "5551912344321"
}

const email = new Email(user);
const sms = new SMS(user);

console.log(email.send());
console.log(sms.send());