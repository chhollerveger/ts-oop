import House from "./models/house";

const homerHouse = new House("Pink", { city: "Springfield" });

console.log(homerHouse.callIntercom());
console.log(homerHouse.enterTheHouse());