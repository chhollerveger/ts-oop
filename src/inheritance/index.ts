import Client from "./models/client";

const client = new Client(
  "Peter Parker",
  new Date("2000-01-01"),
  "peter@parker.com",
  "Avangers"
);

console.log(client);