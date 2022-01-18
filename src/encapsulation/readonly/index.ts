import User from "./user";

const user = new User(
  "Peter",
  "123456",
  new Date("2022-01-01")
);

console.log(user.registrationDate);
// user.registrationDate = new Date(); readonly
// console.log(user.password); private