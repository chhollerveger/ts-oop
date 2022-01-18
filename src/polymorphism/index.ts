import Bakery from "./models/bakery";
import Company from "./models/company";
import Market from "./models/market";

const company = new Company();
const barkey = new Bakery();
const market = new Market();

console.log(company.provideService());
console.log(barkey.provideService());
console.log(market.provideService());