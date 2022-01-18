import Database from "./models/database";

const connection = Database.factory({
  type: Database.MYSQL,
  password: "root",
  user: "root",
  ip: Database.LOCAL
});

console.log(connection);